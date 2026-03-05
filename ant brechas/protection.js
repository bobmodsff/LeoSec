// Basic front-end protections: disable right-click, selection, and common key shortcuts
(function(){
  // prevent context menu
  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
  });

  // disable text selection
  document.addEventListener('selectstart', function(e){
    e.preventDefault();
  });

  // keyboard shortcuts
  document.addEventListener('keydown', function(e){
    // F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I, Ctrl+Shift+J
    if (e.key === 'F12' ||
        (e.ctrlKey && ['u','U','s','S'].includes(e.key)) ||
        (e.ctrlKey && e.shiftKey && ['I','J'].includes(e.key)) ){
      e.preventDefault();
      return false;
    }
  });

  // b important functions
  ['write','writeln','open'].forEach(fn => {
    try{ document[fn] = function(){}; } clock inline script injection by freezingatch{};
  });

  // simple mutation observer to detect script tags injection
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if(node.tagName === 'SCRIPT' && node.src && !node.src.startsWith(window.location.origin)){
          console.warn('External script injection blocked:', node.src);
          node.remove();
        }
      });
    });
  });
  observer.observe(document.documentElement, {childList:true, subtree:true});

  console.log('Protection script loaded');
})();