// ==================== CONSTANTES ====================
const apiKey = "";
const SITE_LOGO = "images/logo/logo-principal.png";

// Aguardar React estar disponível
if (!window.React || !window.ReactDOM) {
  console.error('React não carregou corretamente!');
}

const LEOSEC_KNOWLEDGE = `
Você é a IA de suporte da LeoSec, uma loja de tecnologia hacker, mods e cursos.
Seu tom é profissional, direto, levemente misterioso e amigável.
Redes Sociais: YouTube (@LeoSec_Oficial), GitHub (leosec), Instagram (@LeoSec_In), Discord (Comunidade VIP).
`;

// ==================== SCANLINE EFFECT ====================
const Scanline = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-10">
    <div className="w-full h-2 bg-red-600/20 absolute animate-scan"></div>
  </div>
);

// ==================== COMPONENTE PRODUTO ====================
const ProductCard = ({ title, description, price, type, onAction }) => (
  <div 
    className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-4 active:scale-95 overflow-hidden flex flex-col h-full shadow-2xl"
    style={{ '--hover-glow': 'rgba(220, 38, 38, 0.5)' }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-red-600 to-transparent"></div>
    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>

    <div className="relative z-10 flex items-center gap-5 mb-6">
      <div className="p-4 bg-zinc-950 border border-white/5 rounded-2xl text-zinc-500 group-hover:text-red-500 group-hover:border-red-600/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-500 group-hover:scale-110">
        <span className="text-2xl">💾</span>
      </div>
      <div>
        <h3 className="text-xl font-black tracking-tighter text-white group-hover:text-red-500 transition-colors uppercase italic">
          {title}
        </h3>
        <div className="h-1 w-8 bg-red-600 rounded-full mt-1 group-hover:w-16 transition-all duration-500"></div>
      </div>
    </div>
    
    <p className="relative z-10 text-zinc-400 mb-8 flex-grow text-sm leading-relaxed font-sans group-hover:text-zinc-300 transition-colors">
      {description}
    </p>
    
    <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/5">
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-black">Investimento</span>
        <span className="text-2xl font-black text-white italic group-hover:text-red-500 transition-colors">
          {price === 0 ? 'FREE_ACCESS' : `R$ ${price.toFixed(2)}`}
        </span>
      </div>
      <button 
        onClick={onAction}
        className="px-6 py-3 bg-red-600 text-white font-black rounded-xl hover:bg-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all active:scale-90 flex items-center gap-2 text-[10px] uppercase tracking-widest"
      >
        {type === 'download' ? '📥' : '⚡'}
        {type === 'download' ? 'Download' : 'Adquirir'}
      </button>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
      <div className="h-full w-0 group-hover:w-full transition-all duration-700 bg-red-600 shadow-[0_0_10px_#dc2626]"></div>
    </div>
  </div>
);

// ==================== COMPONENTE REDE SOCIAL ====================
const SocialCard = ({ title, handle, colorClass, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`group relative flex flex-col items-center p-12 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-4 active:scale-95 overflow-hidden`}
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${colorClass}`}></div>
    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
    <div className="relative z-10 mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ease-out text-6xl">
      {title === 'YouTube' && '▶️'}
      {title === 'GitHub' && '🐙'}
      {title === 'Instagram' && '📸'}
      {title === 'Discord' && '💬'}
    </div>
    <span className="relative z-10 text-2xl font-black text-white italic uppercase tracking-tighter group-hover:tracking-widest transition-all duration-500">
      {title}
    </span>
    <p className="relative z-10 text-zinc-600 text-[10px] mt-2 font-mono group-hover:text-zinc-300 transition-colors">
      {handle}
    </p>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
      <div className={`h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${colorClass}`}></div>
    </div>
  </a>
);

// ==================== PÁGINAS ====================

// Página Home
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-12 animate-in fade-in zoom-in duration-1000">
    <div className="relative group">
        <div className="absolute inset-0 bg-red-600 blur-[140px] opacity-40 animate-pulse group-hover:opacity-60 transition-opacity"></div>
        <div className="relative z-10 p-1 bg-gradient-to-b from-red-600 to-transparent rounded-full shadow-[0_0_60px_rgba(239,68,68,0.5)]">
            <img 
                src={SITE_LOGO} 
                alt="LeoSec Logo" 
                className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-black group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => { e.target.src='https://via.placeholder.com/300/000000/ff0000?text=LeoSec' }}
            />
        </div>
    </div>
    <div className="space-y-4">
        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase relative select-none">
          LEO<span className="text-red-600 italic">SEC</span>
          <span className="absolute -bottom-4 right-0 text-[10px] font-mono text-red-500 opacity-40 tracking-[1em] hidden md:block">OPERATIONS_CENTER</span>
        </h1>
    </div>
    <div className="flex gap-4 pt-4">
        <div className="px-10 py-3 border border-red-600/30 bg-red-600/5 rounded-full text-red-500 font-bold uppercase text-[10px] tracking-[0.3em] shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            SISTEMA_ATIVO
        </div>
    </div>
  </div>
);

// Suporte
const Suporte = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, sender: 'bot', text: 'Conexão estabelecida. Eu sou a IA LeoSec. Como posso auxiliar em sua operação hoje?' }
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  React.useEffect(() => scrollToBottom(), [messages]);

  const callGemini = async (userPrompt) => {
    setLoading(true);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: LEOSEC_KNOWLEDGE }] }
        })
      });

      if (!response.ok) throw new Error("Falha na conexão");
      
      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro ao descriptografar resposta.";
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: "Erro de uplink: Sem resposta do servidor central." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMsg }]);
    setInput('');
    callGemini(userMsg);
  };

  return (
    <div className="animate-in slide-in-from-bottom-10 duration-500 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-red-500/20 pb-4">
        <h2 className="text-4xl font-black text-white italic flex items-center gap-4">
          💬 CENTRAL_SUPORTE
        </h2>
        <span className="text-red-900 font-mono text-xs">ENCRYPTED_SIGNAL_STABLE</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[650px]">
        <div className="lg:col-span-1 space-y-4">
            <div className="bg-zinc-900/50 backdrop-blur-md border border-red-500/10 p-6 rounded-2xl h-full flex flex-col gap-4">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2">Comunicação Humana</p>
                <a href="#" className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="bg-blue-600/10 p-2 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">#️⃣</div>
                    <div className="overflow-hidden">
                        <p className="text-[10px] text-zinc-600 uppercase">Discord</p>
                        <p className="font-bold text-zinc-300 truncate">LeoSec#1337</p>
                    </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="bg-green-600/10 p-2 rounded-lg text-green-500 group-hover:scale-110 transition-transform">💬</div>
                    <div>
                        <p className="text-[10px] text-zinc-600 uppercase">WhatsApp</p>
                        <p className="font-bold text-zinc-300">+55 11 9999-HACK</p>
                    </div>
                </a>
                <div className="mt-auto p-4 border border-red-900/20 bg-red-950/10 rounded-xl italic text-xs text-red-500/70">
                    "A segurança é uma ilusão, mas o nosso suporte é real."
                </div>
            </div>
        </div>

        <div className="lg:col-span-3 bg-zinc-950 border border-red-500/30 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative">
          <div className="bg-gradient-to-r from-red-950/80 to-zinc-950 border-b border-red-500/20 p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(239,68,68,1)] animate-pulse"></div>
                <h3 className="font-black text-white text-sm tracking-tighter uppercase">LeoSec_Intelligence_Core</h3>
            </div>
            <span className="text-[10px] font-mono text-zinc-600 tracking-tighter">GEMINI_FLASH_2.5_PRO</span>
          </div>
          <div className="flex-grow p-6 overflow-y-auto space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.03),transparent)]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                <div className={`max-w-[85%] p-4 rounded-2xl border ${
                  msg.sender === 'user' 
                    ? 'bg-red-600/10 border-red-500/40 text-white rounded-tr-none' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 rounded-tl-none shadow-xl'
                }`}>
                  <div className="flex items-center gap-2 mb-2 opacity-50">
                    <span className="text-[9px] font-mono uppercase tracking-widest">
                        {msg.sender === 'user' ? '👤 Local_Host' : '🤖 Remote_Core'}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-zinc-500 text-xs italic">
                  Processando pacotes de dados...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-6 bg-zinc-900/50 backdrop-blur-md border-t border-zinc-800 flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida ou comando..."
              disabled={loading}
              className="flex-grow bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-zinc-700 font-sans"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 text-white px-8 rounded-xl font-black transition-all shadow-lg hover:shadow-red-600/20 active:scale-95 flex items-center gap-2 uppercase text-xs"
            >
              {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : '📤'}
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Page Wrapper
const PageWrapper = ({ title, children }) => (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-8">
      <div className="flex items-center gap-5">
        <div className="p-4 bg-red-600 rounded-2xl text-white shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse">
          <span className="text-2xl">📦</span>
        </div>
        <div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">{title}</h2>
            <p className="text-[10px] text-zinc-600 font-mono tracking-[0.3em]">LOCAL_STORAGE_ENCRYPTED</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {children}
    </div>
  </div>
);

// ==================== APP PRINCIPAL ====================
function App() {
  const [activeTab, setActiveTab] = React.useState('home');

  const navItems = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'vendas', label: 'Vendas Mods', icon: '🛒' },
    { id: 'cursos', label: 'Cursos', icon: '📚' },
    { id: 'scripts', label: 'Scripts Grátis', icon: '💻' },
    { id: 'sociais', label: 'Sociais', icon: '🔗' },
    { id: 'suporte', label: 'Suporte', icon: '💬' },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-400 font-mono selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Scanline />
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      </div>
      
      {/* Navbar */}
      <header className="sticky top-0 z-[60] bg-black/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-24">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-12 h-12 overflow-hidden rounded-xl border-2 border-red-600/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] group-hover:scale-110 group-hover:border-red-600 transition-all duration-500 bg-black">
              <img src={SITE_LOGO} alt="L" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">
              LEO<span className="text-red-600 italic">SEC</span>
            </span>
          </div>

          <nav className="hidden lg:flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2
                  ${activeTab === item.id 
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] translate-y-[-2px]' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'}
                `}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="text-right hidden xl:block">
                <p className="text-[8px] text-zinc-600 uppercase font-bold tracking-widest">Status da Rede</p>
                <p className="text-[10px] text-red-500 font-black">CRYPTO_STABLE</p>
             </div>
             <div className="h-10 w-[1px] bg-white/10 mx-2"></div>
             <button className="bg-zinc-900 border border-white/10 p-3 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                🛡️
             </button>
          </div>
        </div>
      </header>

      {/* Navegação Mobile */}
      <div className="lg:hidden sticky top-24 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/20 overflow-x-auto no-scrollbar flex p-3 gap-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase whitespace-nowrap transition-all flex items-center gap-2
              ${activeTab === item.id ? 'bg-red-600 text-white shadow-lg' : 'bg-zinc-900 text-zinc-500'}
            `}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-16 relative z-10 min-h-screen">
        {activeTab === 'home' && <Home />}
        
        {activeTab === 'vendas' && (
          <PageWrapper title="VENDAS_MODS">
            <ProductCard title="Ghost Menu V2" description="Ocultação absoluta Ring 0. Bypass indetectável para EAC e BattlEye." price={149.90} type="buy" onAction={() => alert('Adquirindo...')} />
            <ProductCard title="Auto-Aim Pro" description="Assistência de mira silenciosa com FOV dinâmico e humanização." price={89.90} type="buy" onAction={() => alert('Adquirindo...')} />
            <ProductCard title="Kernel Spoofer" description="Proteja sua máquina. Troca total de HWID, BIOS, Disk e MAC." price={199.90} type="buy" onAction={() => alert('Adquirindo...')} />
          </PageWrapper>
        )}

        {activeTab === 'cursos' && (
          <PageWrapper title="CURSOS_ELITE">
            <ProductCard title="Engenharia Reversa" description="Aprenda a desconstruir executáveis e dominar Assembly." price={299.00} type="buy" onAction={() => alert('Adquirindo...')} />
            <ProductCard title="C++ Cheat Development" description="Do zero ao primeiro cheat interno. VTable Hooking e DLL Injection." price={249.00} type="buy" onAction={() => alert('Adquirindo...')} />
            <ProductCard title="Kernel Exploitation" description="O auge do hacking. Escreva drivers e rode código em nível de sistema." price={399.00} type="buy" onAction={() => alert('Adquirindo...')} />
          </PageWrapper>
        )}

        {activeTab === 'scripts' && (
          <PageWrapper title="SCRIPTS_GRÁTIS">
            <ProductCard title="Limpa Logs .BAT" description="Script para expurgar registros de eventos e temp automaticamente." price={0} type="download" onAction={() => alert('Baixando...')} />
            <ProductCard title="Discord Webhook Tool" description="Automatize notificações em seu servidor Discord via Python." price={0} type="download" onAction={() => alert('Baixando...')} />
            <ProductCard title="Fast Port Scanner" description="Ferramenta para auditoria de rede local e teste de portas." price={0} type="download" onAction={() => alert('Baixando...')} />
          </PageWrapper>
        )}

        {activeTab === 'sociais' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto py-24 animate-in zoom-in-95 duration-700">
            <SocialCard title="YouTube" handle="/LeoSec_Oficial" colorClass="from-red-600/40 via-red-800/20 to-transparent" link="https://youtube.com/@LeoSec_Oficial" />
            <SocialCard title="GitHub" handle="@leosec" colorClass="from-zinc-100/20 via-zinc-400/10 to-transparent" link="https://github.com/leosec" />
            <SocialCard title="Instagram" handle="@LeoSec_In" colorClass="from-pink-600/40 via-purple-600/20 to-orange-500/20" link="https://instagram.com/LeoSec_In" />
            <SocialCard title="Discord" handle="Servidor VIP" colorClass="from-indigo-500/40 via-blue-600/20 to-transparent" link="#" />
          </div>
        )}

        {activeTab === 'suporte' && <Suporte />}
      </main>
      
      <footer className="border-t border-white/5 py-16 bg-black text-center relative z-10">
        <div className="flex justify-center gap-3 mb-6 opacity-30">
            {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" style={{animationDelay: `${i*100}ms`}}></div>)}
        </div>
        <div className="flex flex-col items-center gap-4 mb-8 opacity-40 hover:opacity-100 transition-opacity duration-500 group">
             <img src={SITE_LOGO} alt="LeoSec" className="w-12 h-12 rounded-xl grayscale group-hover:grayscale-0 transition-all shadow-2xl" />
        </div>
        <p className="text-[10px] font-black tracking-[0.5em] text-zinc-700 uppercase mb-4">
          LeoSec Infrastructure - Secure Terminal - No Logs Policy
        </p>
        <div className="flex justify-center gap-8 text-[9px] font-mono text-zinc-800">
            <span>UPTIME: 99.9%</span>
            <span>LATENCY: 14MS</span>
            <span>ENCRYPTION: AES-256</span>
        </div>
      </footer>
    </div>
  );
}

// ==================== RENDERIZAÇÃO ====================
window.addEventListener('DOMContentLoaded', () => {
  try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    console.log('✅ App renderizado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao renderizar:', error);
    document.getElementById('root').innerHTML = '<h1 style="color:red;padding:20px;">Erro ao carregar a aplicação. Verifique o console.</h1>';
  }
});
