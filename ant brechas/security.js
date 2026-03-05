// Basic security utilities for frontend interactions
// Note: client-side defenses are mostly deterrents; real protection requires server-side checks.
(function(){
  // disable eval and Function constructor as much as possible
  try { window.eval = function(){ throw new Error('eval disabled'); }; } catch(e){}
  try { window.Function = function(){ throw new Error('Function constructor disabled'); }; } catch(e){}

  // simple hash checker using Web Crypto API
  async function calculateSHA256(blob) {
    const array = await blob.arrayBuffer();
    const digest = await crypto.subtle.digest('SHA-256', array);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2,'0')).join('');
  }

  // verify download link by fetching and comparing hash
  window.verifyDownload = async function(url, expectedHash) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('fetch failed');
      const blob = await response.blob();
      const hash = await calculateSHA256(blob);
      if (hash !== expectedHash) {
        alert('Aviso de segurança: arquivo modificado ou corrompido.\nHash esperado: '+expectedHash+'\nHash obtido: '+hash);
        console.warn('Hash mismatch for ', url);
        return false;
      }
      return true;
    } catch(err) {
      console.error('verifyDownload error', err);
      alert('Erro ao verificar arquivo: '+err.message);
      return false;
    }
  };

  // sanitize text input to remove script tags, etc.
  window.sanitizeString = function(str) {
    return str.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
              .replace(/javascript:/gi, '');
  };

  // observe added links and warn if potentially dangerous
  const linkObserver = new MutationObserver(muts => {
    muts.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.tagName === 'A' && node.href) {
          if (node.href.startsWith('javascript:') || node.href.includes('data:')) {
            console.warn('Blocked suspicious link', node.href);
            node.href = '#';
          }
        }
      });
    });
  });
  linkObserver.observe(document.body, {childList:true, subtree:true});

  console.log('Security utilities loaded');
})();