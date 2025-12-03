import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Янв', income: 4000, expense: 2400 },
  { name: 'Фев', income: 3000, expense: 1398 },
  { name: 'Мар', income: 2000, expense: 9800 },
  { name: 'Апр', income: 2780, expense: 3908 },
  { name: 'Май', income: 1890, expense: 4800 },
  { name: 'Июн', income: 2390, expense: 3800 },
  { name: 'Июл', income: 3490, expense: 4300 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
      {/* Browser Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="bg-white px-3 py-1 rounded-md border border-slate-200 text-[10px] font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            app.cfo.uz/dashboard
        </div>
        <div className="w-4"></div>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
        {/* Sidebar Mock */}
        <div className="hidden md:block col-span-1 space-y-3">
            <div className="h-10 bg-brand-50 text-brand-700 rounded-lg w-full flex items-center px-4 text-xs font-bold border border-brand-100">
                Финансовый результат
            </div>
            <div className="h-10 bg-white hover:bg-slate-50 text-slate-600 rounded-lg w-full flex items-center px-4 text-xs font-medium border border-transparent transition-colors cursor-pointer">
                Движение денег (Cashflow)
            </div>
            <div className="h-10 bg-white hover:bg-slate-50 text-slate-600 rounded-lg w-full flex items-center px-4 text-xs font-medium border border-transparent transition-colors cursor-pointer">
                Склад и остатки
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-900 text-white text-center">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Баланс счета</div>
                    <div className="text-lg font-bold">1.2 Млрд UZS</div>
                    <div className="text-[10px] text-green-400 mt-1">+2% за сегодня</div>
                </div>
            </div>
        </div>

        {/* Main Chart Area */}
        <div className="col-span-2 flex flex-col">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Чистая прибыль (Net Profit)</h4>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">142,300,000 UZS</div>
                </div>
                <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                    <button className="px-3 py-1 text-[10px] font-bold bg-white rounded shadow-sm text-slate-800">1М</button>
                    <button className="px-3 py-1 text-[10px] font-medium text-slate-500 hover:bg-white/50 rounded transition-colors">3М</button>
                    <button className="px-3 py-1 text-[10px] font-medium text-slate-500 hover:bg-white/50 rounded transition-colors">1Г</button>
                </div>
            </div>

            {/* Recharts Container Fix: Explicit height and relative positioning */}
            <div className="w-full h-48 mb-6 relative" style={{ minHeight: '192px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    data={data}
                    margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                    >
                    <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#429321" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#429321" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 500}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 500}} />
                    <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                        itemStyle={{ fontSize: '12px', fontWeight: 600, color: '#1e293b' }}
                        cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="income" 
                        stroke="#429321" 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill="url(#colorIncome)" 
                        activeDot={{ r: 6, strokeWidth: 0, fill: '#AEE74F' }}
                    />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-brand-50/50 p-4 rounded-xl border border-brand-100/50">
                    <div className="text-xs text-slate-500 mb-1 font-medium">Расход (Товары)</div>
                    <div className="font-bold text-slate-800 text-lg">12,400 шт</div>
                </div>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1 font-medium">Налоги (К уплате)</div>
                    <div className="font-bold text-slate-800 text-lg">4.5 млн UZS</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;