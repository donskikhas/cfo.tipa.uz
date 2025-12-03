
import React from 'react';
import { ArrowRight, Database, Server, Shield, CheckCircle2 } from 'lucide-react';

const IntegrationFlow: React.FC = () => {
  return (
    <div className="w-full py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 relative shadow-xl">
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-12 w-full mx-auto">
        
        {/* Sources Group */}
        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 w-72 transform hover:-translate-x-1 transition-transform cursor-default group">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-xs border border-blue-100 dark:border-blue-800 group-hover:scale-110 transition-transform">
              SOLIQ
            </div>
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">ГНК (Soliq.uz)</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Налоговая отчетность</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 w-72 transform hover:-translate-x-1 transition-transform cursor-default group">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center border border-emerald-100 dark:border-emerald-800 group-hover:scale-110 transition-transform">
               <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">Банки РУз</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Выписки и счета</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>

        {/* Animated Arrow Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="relative w-full h-12 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-400 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
            </div>
        </div>

        {/* Arrow Mobile */}
        <div className="md:hidden flex items-center justify-center py-4">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
        </div>

        {/* CFO Engine (Center) */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border-2 border-brand-100 dark:border-brand-900 w-full max-w-sm text-center relative z-20 group">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white text-[11px] px-4 py-1 rounded-full uppercase tracking-wider font-bold shadow-lg">
            Обработка
          </div>
          <div className="mb-5 flex justify-center">
            <div className="w-20 h-20 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                <Database className="w-10 h-10 text-brand-600 dark:text-brand-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">CFO.uz Engine</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Автоматический матчинг транзакций, разнесение по счетам учета и формирование проводок.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30 py-2 px-3 rounded-lg">
            <Shield className="w-4 h-4" />
            Шифрование AES-256
          </div>
        </div>

        {/* Animated Arrow Desktop */}
         <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="relative w-full h-12 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-400 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
            </div>
        </div>

        {/* Arrow Mobile */}
        <div className="md:hidden flex items-center justify-center py-4">
            <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
        </div>

        {/* Result */}
        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-2xl shadow-xl border border-slate-800 dark:border-slate-900 w-72 text-white relative z-10">
          <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-lg">Результат</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_5px_rgba(164,244,121,0.8)]"></div>
                  Баланс (Форма 1)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_5px_rgba(164,244,121,0.8)]"></div>
                  Фин. рез (Форма 2)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_5px_rgba(164,244,121,0.8)]"></div>
                  Сдача в ГНК в 1 клик
                </li>
              </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IntegrationFlow;
