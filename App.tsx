import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  ChevronDown,
  Moon,
  Sun,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  MapPin,
  Phone,
  Mail,
  Check,
  Minus
} from 'lucide-react';
import { NAV_ITEMS, PRICING_PLANS, COMPARISON_ROWS, TRANSLATIONS, MODULES, getModuleContent } from './constants';
import { Language, Theme, PageType } from './types';
import IntegrationFlow from './components/IntegrationFlow';
import DashboardPreview from './components/DashboardPreview';
import ModulePage from './components/ModulePage';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('ru');
  const [theme, setTheme] = useState<Theme>('light');
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [view, setView] = useState<PageType>('home');

  // Load state from local storage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) setLang(savedLang);

    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
    
    // STRICT FORCE RESET ROUTING ON LOAD
    // This ensures the user ALWAYS lands on the home page, removing any stuck module hashes.
    if (window.location.hash) {
        try {
            window.history.replaceState(null, '', window.location.pathname);
        } catch (e) {
            // Fallback for preview environments where replaceState is restricted
            window.location.hash = '';
        }
    }
    setView('home');
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Hash Change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // remove #
      
      if (hash.startsWith('module/')) {
         const moduleId = hash.split('/')[1];
         setView(`module:${moduleId}`);
         window.scrollTo(0,0);
      } else if (hash === 'privacy') {
         setView('privacy');
         window.scrollTo(0,0);
      } else if (hash === 'offer') {
         setView('offer');
         window.scrollTo(0,0);
      } else {
         setView('home');
         if (hash) {
           setTimeout(() => {
               const el = document.getElementById(hash);
               if (el) {
                 const headerOffset = 80;
                 const elementPosition = el.getBoundingClientRect().top;
                 const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                 window.scrollTo({ top: offsetPosition, behavior: "smooth" });
               }
           }, 100);
         }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Only verify hash logic if user interacts, initial load is handled by the strict reset above
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavigation = (target: string) => {
    setIsMenuOpen(false);
    setFeaturesOpen(false);

    if (target.startsWith('module:')) {
        const moduleId = target.split(':')[1];
        const content = getModuleContent(moduleId, lang);
        if (content) {
            window.location.hash = `module/${moduleId}`;
        } else {
             window.location.hash = 'features';
        }
    } else if (target.startsWith('#')) {
        window.location.hash = target.replace('#', '');
    } else {
        window.location.hash = '';
    }
  };

  const t = TRANSLATIONS[lang];

  // Routing Logic
  const renderContent = () => {
    if (view.startsWith('module:')) {
        const moduleId = view.split(':')[1];
        const content = getModuleContent(moduleId, lang);
        if (content) {
            return <ModulePage content={content} lang={lang} onBack={() => { window.location.hash = ''; }} />;
        }
    }

    if (view === 'privacy') {
        return (
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={() => { window.location.hash = ''; }} className="mb-8 flex items-center text-brand-600 font-bold hover:underline group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> {t.back_home}
                </button>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t.privacy_policy}</h1>
                    <p className="text-slate-600 dark:text-slate-400">Текст политики конфиденциальности...</p>
                </div>
            </div>
        )
    }
    if (view === 'offer') {
        return (
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={() => { window.location.hash = ''; }} className="mb-8 flex items-center text-brand-600 font-bold hover:underline group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> {t.back_home}
                </button>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t.public_offer}</h1>
                    <p className="text-slate-600 dark:text-slate-400">Текст публичной оферты...</p>
                </div>
            </div>
        )
    }

    // 3. Home Page
    return (
        <>
        {/* --- HERO SECTION --- */}
        <main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-brand-50/50 dark:bg-brand-900/10 rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50/40 to-transparent dark:from-slate-900 dark:to-transparent -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-brand-200 dark:border-brand-800 shadow-sm text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                {t.hero_badge}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                {t.hero_title_1} <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-brand-400">
                    {t.hero_title_highlight}
                </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {t.hero_subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="https://app.cfo.uz/" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-800 hover:to-brand-700 shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1">
                    {t.hero_cta_app}
                    <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button 
                    onClick={() => handleNavigation('#process')}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-2xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 hover:bg-brand-50/50 dark:hover:bg-slate-700 transition-all"
                >
                    {t.hero_cta_how}
                </button>
                </div>

                <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    {t.integration_soliq}
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    {t.integration_bank}
                </div>
                </div>
            </div>
            
            {/* Right Visual */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-400/20 to-blue-400/20 blur-3xl rounded-full -z-10"></div>
                <div className="transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
                    <DashboardPreview />
                    <div className="absolute -left-4 top-20 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden md:flex items-center gap-3 animate-bounce duration-[3000ms]">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-[10px]">SOLIQ</div>
                    <div>
                        <div className="text-xs text-slate-400 font-semibold">Синхронизация</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-white">Успешно</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-brand-500 ml-1" />
                    </div>
                </div>
            </div>

            </div>
        </div>
        </main>

        {/* --- INTEGRATION FLOW --- */}
        <section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <span className="text-brand-600 dark:text-brand-400 font-bold tracking-wider uppercase text-sm">{t.how_subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6 font-display">
                        {t.how_title}
                    </h2>
                    <IntegrationFlow />
                </div>
            </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="py-24 bg-brand-50/30 dark:bg-slate-900/50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">{t.modules_title}</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">{t.modules_subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MODULES.map((module) => (
                <div 
                  key={module.id} 
                  onClick={() => {
                    if (module.status === 'active' || module.id === 'hr') {
                        handleNavigation(`module:${module.id}`);
                    }
                  }}
                  className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group transition-all duration-300 relative overflow-hidden ${
                    (module.status === 'active' || module.id === 'hr')
                    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
                    : 'opacity-80 cursor-default'
                  }`}
                >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                     (module.status === 'active' || module.id === 'hr')
                     ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white'
                     : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
                }`}>
                    {module.icon}
                </div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{module.title[lang]}</h3>
                    <span className={`text-[10px] uppercase font-bold tracking-wider py-1 px-2 rounded-lg ${
                        module.status === 'active' 
                        ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400' 
                        : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                    }`}>
                        {module.status === 'active' ? t.status_active : t.status_soon}
                    </span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* --- PREMIUM PRICING --- */}
        <section className="py-24 bg-white dark:bg-slate-950" id="pricing">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">{t.pricing_title}</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">{t.pricing_subtitle}</p>
            </div>
            
            {/* DESKTOP TABLE VIEW (Hidden on mobile) */}
            <div className="hidden lg:grid grid-cols-6 gap-0 border-t border-l border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-slate-900">
                {/* Header Row */}
                <div className="p-6 bg-slate-50 dark:bg-slate-950 border-r border-b border-slate-200 dark:border-slate-800 flex items-center font-bold text-slate-400 uppercase tracking-wider text-xs">
                    Функции
                </div>
                {['default', 'lite', 'standard', 'pro', 'vip'].map((planKey) => {
                     const isStandard = planKey === 'standard';
                     const plan = PRICING_PLANS.find(p => p.name === planKey)!;
                     return (
                         <div key={planKey} className={`relative p-8 border-r border-b border-slate-200 dark:border-slate-800 flex flex-col items-center justify-between text-center ${isStandard ? 'bg-brand-50/30 dark:bg-brand-900/10' : ''}`}>
                             <div className="flex flex-col items-center h-full justify-between w-full">
                                 <div>
                                     {isStandard && (
                                         <div className="absolute top-0 left-0 right-0 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 z-10">
                                             Выбор CFO
                                         </div>
                                     )}
                                     <h3 className={`text-lg font-bold mb-2 ${isStandard ? 'text-brand-700 dark:text-brand-400' : 'text-slate-800 dark:text-white'}`}>{plan.title[lang]}</h3>
                                     <div className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">{plan.price[lang]}</div>
                                     {planKey !== 'vip' && planKey !== 'default' && <div className="text-xs text-slate-400">{plan.period[lang]}</div>}
                                 </div>
                                 
                                 <a 
                                    href="https://app.cfo.uz/auth?tab=2"
                                    className={`mt-6 px-6 py-2.5 rounded-xl text-sm font-bold transition-all w-full ${
                                        isStandard
                                        ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20'
                                        : planKey === 'vip' 
                                          ? 'bg-slate-800 text-white hover:bg-slate-700'
                                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                                    }`}
                                 >
                                     {plan.cta === 'free' ? t.pricing_cta_free : plan.cta === 'contact' ? t.pricing_cta_contact : t.pricing_cta_buy}
                                 </a>
                             </div>
                         </div>
                     )
                })}

                {/* Rows */}
                {COMPARISON_ROWS.map((row, idx) => (
                    <React.Fragment key={idx}>
                        {/* Title Col */}
                        <div className={`p-5 flex items-center text-sm font-medium border-r border-b border-slate-200 dark:border-slate-800 ${
                            row.isHeader ? 'bg-slate-50 dark:bg-slate-950 font-bold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                        }`}>
                            {row.title[lang]}
                        </div>
                        {/* Value Cols */}
                        {['default', 'lite', 'standard', 'pro', 'vip'].map((planKey) => {
                            const isStandard = planKey === 'standard';
                            // @ts-ignore
                            const val = row.values[planKey];
                            return (
                                <div key={planKey} className={`p-5 flex items-center justify-center border-r border-b border-slate-200 dark:border-slate-800 ${isStandard ? 'bg-brand-50/10 dark:bg-brand-900/5' : ''}`}>
                                    {val === true ? (
                                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        </div>
                                    ) : val === false ? (
                                        <Minus className="w-4 h-4 text-slate-300" />
                                    ) : (
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{val}</span>
                                    )}
                                </div>
                            )
                        })}
                    </React.Fragment>
                ))}
            </div>

            {/* MOBILE CARDS VIEW (Simplified, Horizontal Scroll) */}
            <div className="lg:hidden flex flex-nowrap overflow-x-auto gap-4 px-4 pb-8 -mx-4 pt-6 snap-x snap-mandatory scroll-smooth hide-scrollbar">
                {PRICING_PLANS.map((plan, idx) => {
                    const isStandard = plan.name === 'standard';
                    return (
                        <div 
                            key={idx} 
                            className={`
                                relative flex flex-col snap-center min-w-[280px] rounded-2xl transition-all duration-300 p-6 border
                                ${isStandard 
                                    ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-xl shadow-brand-500/10 z-10' 
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                                }
                            `}
                        >
                             {isStandard && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full shadow-md z-20">
                                    Хит
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{plan.title[lang]}</h3>
                            <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">{plan.price[lang]}</div>
                            <ul className="space-y-3 mb-6 flex-1">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                                        <span>{f[lang]}</span>
                                    </li>
                                ))}
                            </ul>
                            <a 
                                href="https://app.cfo.uz/auth?tab=2"
                                className={`w-full py-3 rounded-xl text-center font-bold text-sm ${
                                    isStandard 
                                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                }`}
                            >
                                {plan.cta === 'free' ? t.pricing_cta_free : t.pricing_cta_buy}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
        </section>

        {/* --- CTA BOTTOM --- */}
        <section className="py-24 bg-brand-900 dark:bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Ваш бизнес достоин порядка</h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                Забудьте про ошибки в Excel и штрафы налоговой. CFO.uz возьмет рутину на себя.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://app.cfo.uz/auth?tab=2" className="px-10 py-5 bg-brand-400 text-brand-950 rounded-2xl font-extrabold hover:bg-white transition-all shadow-xl shadow-brand-900/50 text-lg">
                    Попробовать бесплатно
                </a>
            </div>
            <p className="mt-6 text-brand-200/60 text-sm">Не требует установки. Работает в облаке.</p>
        </div>
        </section>
        </>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl px-6 transition-all duration-300 ${
            scrolled 
              ? 'glass-nav h-16 shadow-lg border border-slate-200/50 dark:border-slate-700/50' 
              : 'bg-transparent h-20'
          } flex justify-between items-center`}>
            
            {/* Logo - Force Home Reset */}
            <div 
                className="flex items-center cursor-pointer group" 
                onClick={() => { 
                    window.location.hash = ''; 
                    window.scrollTo(0,0);
                    setView('home'); 
                }}
            >
              <Logo className="h-10 w-auto text-slate-800 dark:text-white transition-colors" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-sm relative">
              {NAV_ITEMS.map((item) => (
                <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-full transition-all flex items-center gap-1"
                      onMouseEnter={() => item.hasDropdown && setFeaturesOpen(true)}
                    >
                      {item.label[lang]}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                </div>
              ))}
              
              {/* Mega Menu */}
              {featuresOpen && (
                 <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 grid gap-1 animate-in fade-in slide-in-from-top-2"
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                 >
                    {MODULES.map((module) => (
                        <div 
                            key={module.id} 
                            onClick={() => {
                                if(module.status === 'active' || module.id === 'hr') {
                                    handleNavigation(`module:${module.id}`);
                                }
                            }}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                                (module.status === 'active' || module.id === 'hr')
                                ? 'hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer' 
                                : 'opacity-60 cursor-default'
                            }`}
                        >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                module.status === 'active' 
                                ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400' 
                                : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
                            }`}>
                                {module.icon}
                            </div>
                            <div className="flex-1">
                                <div className={`text-sm font-bold ${module.status === 'active' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                                    {module.title[lang]}
                                </div>
                                <div className={`text-[10px] uppercase font-bold tracking-wider mt-0.5 ${
                                    module.status === 'active' ? 'text-brand-600' : 'text-slate-400'
                                }`}>
                                    {module.status === 'active' ? t.status_active : t.status_soon}
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
              )}
            </nav>

            {/* CTA & Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                 {(['ru', 'uz', 'en'] as Language[]).map(l => (
                    <button
                        key={l}
                        onClick={() => changeLang(l)}
                        className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                            lang === l 
                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                            : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
                        }`}
                    >
                        {l.toUpperCase()}
                    </button>
                 ))}
              </div>

               <button 
                  onClick={toggleTheme}
                  className="p-2 text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
               </button>

              <a 
                href="https://app.cfo.uz/" 
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-brand-600 dark:hover:bg-brand-400 transition-all shadow-md hover:shadow-xl font-semibold text-sm group"
              >
                {t.login}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-brand-600 rounded-lg hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-24 left-4 right-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-4 md:hidden z-50 animate-in slide-in-from-top-4">
            <div className="flex flex-col space-y-2">
               <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                         {(['ru', 'uz', 'en'] as Language[]).map(l => (
                            <button
                                key={l}
                                onClick={() => changeLang(l)}
                                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                                    lang === l 
                                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                                    : 'text-slate-500'
                                }`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <button onClick={toggleTheme} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-white"/>}
                    </button>
               </div>

              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.href)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 active:bg-brand-100 transition-colors text-left w-full"
                >
                  {item.label[lang]}
                </button>
              ))}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
               <a href="https://app.cfo.uz/auth?tab=2" className="w-full text-center py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-bold hover:border-brand-300 hover:text-brand-700 transition-colors">
                 {t.create_account}
               </a>
               <a href="https://app.cfo.uz/" className="w-full text-center py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 shadow-lg shadow-brand-500/30 transition-all">
                 {t.login}
               </a>
            </div>
          </div>
        )}
      </header>

      {renderContent()}

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 pt-24 pb-12 text-slate-400 relative border-t-4 border-brand-600" id="contact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-4 space-y-6">
                 <div className="flex items-center cursor-pointer group" onClick={() => { window.location.hash = ''; window.scrollTo(0,0) }}>
                     <Logo className="h-10 w-auto text-white" />
                </div>
                <p className="text-slate-400 leading-relaxed max-w-sm">
                    {t.footer_desc}
                    <br />
                    Мы делаем финансы прозрачными, а бизнес — управляемым.
                </p>
                <div className="flex gap-3">
                     <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-slate-800 hover:scale-110">
                        <Facebook size={18} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-slate-800 hover:scale-110">
                        <Instagram size={18} />
                     </a>
                     <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all border border-slate-800 hover:scale-110">
                        <Linkedin size={18} />
                     </a>
                </div>
            </div>

            <div className="lg:col-span-2">
                <h4 className="text-white font-bold mb-6 font-display uppercase tracking-wider text-sm">{t.footer_product}</h4>
                <ul className="space-y-4">
                    <li><button onClick={() => handleNavigation('#features')} className="hover:text-brand-400 transition-colors flex items-center gap-2 group w-full text-left"><span className="w-0 group-hover:w-2 h-0.5 bg-brand-500 transition-all inline-block"></span><span className="group-hover:translate-x-1 transition-transform">{t.modules_title}</span></button></li>
                    <li><button onClick={() => handleNavigation('#process')} className="hover:text-brand-400 transition-colors flex items-center gap-2 group w-full text-left"><span className="w-0 group-hover:w-2 h-0.5 bg-brand-500 transition-all inline-block"></span><span className="group-hover:translate-x-1 transition-transform">{t.how_title}</span></button></li>
                    <li><button onClick={() => handleNavigation('#pricing')} className="hover:text-brand-400 transition-colors flex items-center gap-2 group w-full text-left"><span className="w-0 group-hover:w-2 h-0.5 bg-brand-500 transition-all inline-block"></span><span className="group-hover:translate-x-1 transition-transform">{t.pricing_title}</span></button></li>
                </ul>
            </div>

             <div className="lg:col-span-2">
                <h4 className="text-white font-bold mb-6 font-display uppercase tracking-wider text-sm">{t.footer_docs}</h4>
                <ul className="space-y-4">
                    <li><button onClick={() => { window.location.hash = 'offer'; window.scrollTo(0,0)}} className="hover:text-brand-400 transition-colors text-left flex items-center gap-2 group w-full"><span className="w-0 group-hover:w-2 h-0.5 bg-brand-500 transition-all inline-block"></span><span className="group-hover:translate-x-1 transition-transform">{t.public_offer}</span></button></li>
                    <li><button onClick={() => { window.location.hash = 'privacy'; window.scrollTo(0,0)}} className="hover:text-brand-400 transition-colors text-left flex items-center gap-2 group w-full"><span className="w-0 group-hover:w-2 h-0.5 bg-brand-500 transition-all inline-block"></span><span className="group-hover:translate-x-1 transition-transform">{t.privacy_policy}</span></button></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors text-left flex items-center gap-2 group w-full"><span className="w-0 group-hover:w-2 h-0.5 bg-brand-500 transition-all inline-block"></span><span className="group-hover:translate-x-1 transition-transform">SLA</span></a></li>
                </ul>
            </div>

            <div className="lg:col-span-4">
                 <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-brand-600/50 transition-colors">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <MapPin size={120} />
                     </div>
                     <h4 className="text-white font-bold mb-6 font-display uppercase tracking-wider text-sm relative z-10">{t.footer_contacts}</h4>
                     
                     <div className="space-y-4 relative z-10">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-brand-500">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Офис</div>
                                <div className="text-white text-sm font-medium">г. Ташкент, Юнусабадский р-н,<br/>ул. Амира Темура, 107Б</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-brand-500">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Телефон</div>
                                <a href="tel:+998901234567" className="text-white text-sm font-medium hover:text-brand-400 transition-colors">+998 90 123 45 67</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-brand-500">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Email</div>
                                <a href="mailto:support@cfo.uz" className="text-white text-sm font-medium hover:text-brand-400 transition-colors">support@cfo.uz</a>
                            </div>
                        </div>
                     </div>

                     <a href="https://t.me/cfo_support" target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center w-full py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all gap-2 group-hover:shadow-lg shadow-brand-500/20">
                         Написать в Telegram <Send size={16} />
                     </a>
                 </div>
            </div>

          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
             <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-slate-500">All systems operational</span>
             </div>
             <div className="text-slate-600">
                 {t.footer_rights}
             </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;