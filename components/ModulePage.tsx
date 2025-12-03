
import React from 'react';
import { ArrowRight, CheckCircle2, ArrowLeft, TrendingUp, TrendingDown, DollarSign, Layers, Users, FileText, Calendar, Trophy, Search, Filter, Download, MoreHorizontal, FileCheck, RefreshCw, Key, ShieldCheck, Box, ScanLine, CreditCard, Landmark, AlertTriangle, Printer, Power } from 'lucide-react';
import { ModuleDetailContent, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, BarChart, Bar, Cell, PieChart as RechartsPie, Pie } from 'recharts';

interface ModulePageProps {
  content: ModuleDetailContent;
  lang: Language;
  onBack: () => void;
}

// --- SHARED VISUALS ---

const HeroDashboardVisual = () => {
    const data = [
        { name: '1', income: 12000, expense: 8000 },
        { name: '5', income: 15000, expense: 9000 },
        { name: '10', income: 11000, expense: 12000 },
        { name: '15', income: 24000, expense: 10000 },
        { name: '20', income: 18000, expense: 11000 },
        { name: '25', income: 32000, expense: 15000 },
        { name: '30', income: 38000, expense: 22000 },
    ];

    return (
        <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl relative flex flex-col p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Чистая прибыль</div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white">425 млн UZS</div>
                    <div className="flex items-center text-xs text-green-500 font-bold mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" /> +12.5% к прошлому месяцу
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-700 rounded-lg p-1 flex shadow-sm">
                    <div className="px-3 py-1 bg-brand-50 text-brand-700 rounded text-xs font-bold">Месяц</div>
                    <div className="px-3 py-1 text-slate-400 text-xs font-bold">Год</div>
                </div>
            </div>
            <div className="flex-1 relative mb-6" style={{ minHeight: '150px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#429321" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#429321" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" hide />
                        <Area type="monotone" dataKey="income" stroke="#429321" fillOpacity={1} fill="url(#colorInc)" strokeWidth={2} />
                        <Area type="monotone" dataKey="expense" stroke="#ef4444" fillOpacity={1} fill="url(#colorExp)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
             <div className="absolute top-4 right-4 bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-pulse">
                LIVE
            </div>
        </div>
    )
}

// --- FINANCE VISUALS ---

const PnLVisual = () => {
    const data = [
      { name: 'Выручка', value: 100, color: '#429321' },
      { name: 'Себестоимость', value: 40, color: '#94a3b8' },
      { name: 'Расходы', value: 30, color: '#ef4444' },
      { name: 'Прибыль', value: 30, color: '#AEE74F' },
    ];
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full flex flex-col justify-center">
             <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-800 dark:text-white">Структура P&L</h4>
                <span className="text-xs text-slate-400">Окт 2024</span>
             </div>
             <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical">
                         <XAxis type="number" hide />
                         <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: 8, border: 'none'}} />
                         <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                         </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>
             <div className="flex justify-between text-xs font-medium text-slate-500 mt-2">
                 <span>Выручка</span>
                 <span className="text-brand-600 font-bold">+24%</span>
             </div>
        </div>
    )
}

const CashflowVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full flex flex-col overflow-hidden">
             <div className="flex items-center justify-between mb-4 shrink-0">
                 <div className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                         <DollarSign className="w-4 h-4" />
                     </div>
                     Движение средств
                 </div>
             </div>
             <div className="space-y-3 overflow-y-auto flex-1 pr-2 scrollbar-thin">
                 {[
                     { name: 'Поступление от клиентов', amount: '+ 45.2M', date: 'Сегодня, 14:30', type: 'in' },
                     { name: 'Оплата аренды', amount: '- 12.0M', date: 'Вчера, 10:00', type: 'out' },
                     { name: 'Закупка товаров', amount: '- 8.5M', date: 'Вчера, 09:15', type: 'out' },
                     { name: 'Возврат средств', amount: '- 1.2M', date: '22 Окт, 16:20', type: 'out' },
                     { name: 'Офисные расходы', amount: '- 0.5M', date: '21 Окт, 11:00', type: 'out' },
                     { name: 'Поступление (Аванс)', amount: '+ 15.0M', date: '20 Окт, 15:45', type: 'in' },
                 ].map((tx, i) => (
                     <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                         <div>
                             <div className="text-sm font-bold text-slate-800 dark:text-white">{tx.name}</div>
                             <div className="text-[10px] text-slate-400">{tx.date}</div>
                         </div>
                         <div className={`text-sm font-bold ${tx.type === 'in' ? 'text-green-600' : 'text-slate-800 dark:text-slate-300'}`}>
                             {tx.amount}
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    )
}

const ProjectsVisual = () => {
    const data = [
        { name: 'Филиал 1', value: 45, color: '#429321' },
        { name: 'Филиал 2', value: 30, color: '#3b82f6' },
        { name: 'Онлайн', value: 25, color: '#f59e0b' },
    ];
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full flex flex-col justify-center">
            <div className="mb-4">
                <h4 className="font-bold text-slate-800 dark:text-white">Прибыль по проектам</h4>
            </div>
            <div className="h-48 relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <RechartsPie>
                        <Pie
                            data={data}
                            innerRadius={55} // Reduced to prevent clipping
                            outerRadius={75} // Reduced to prevent clipping
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </RechartsPie>
                 </ResponsiveContainer>
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <span className="text-2xl font-bold text-slate-800 dark:text-white">100%</span>
                     <span className="text-[10px] text-slate-400 uppercase">Эффективность</span>
                 </div>
            </div>
            <div className="flex justify-center gap-4 mt-2">
                 {data.map((d,i) => (
                     <div key={i} className="flex items-center gap-1.5">
                         <div className="w-2 h-2 rounded-full" style={{backgroundColor: d.color}}></div>
                         <span className="text-xs text-slate-600 dark:text-slate-400">{d.name}</span>
                     </div>
                 ))}
            </div>
        </div>
    )
}

// --- HR VISUALS ---

const PayrollVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-slate-800 dark:text-white text-sm">Расчетная ведомость</h4>
                <span className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-md font-bold">Октябрь</span>
            </div>
            <div className="space-y-2">
                {[
                    { name: 'Сардор А.', role: 'Менеджер', salary: '5 000 000', bonus: '+1.2M', total: '6.2M' },
                    { name: 'Алина К.', role: 'Бухгалтер', salary: '7 000 000', bonus: '+500K', total: '7.5M' },
                    { name: 'Джасур Б.', role: 'Продавец', salary: '3 500 000', bonus: '+2.1M', total: '5.6M' },
                ].map((emp, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-xs">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">
                                {emp.name[0]}
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 dark:text-slate-200">{emp.name}</div>
                                <div className="text-slate-400 text-[10px]">{emp.role}</div>
                            </div>
                        </div>
                        <div className="text-right">
                             <div className="font-bold text-brand-600">{emp.total}</div>
                             <div className="text-slate-400 text-[10px]">Оклад: {emp.salary}</div>
                        </div>
                    </div>
                ))}
            </div>
             <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                 <span className="text-xs text-slate-500 font-medium">К выплате:</span>
                 <span className="text-lg font-bold text-slate-900 dark:text-white">19 300 000 UZS</span>
             </div>
        </div>
    )
}

const HrAdminVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -z-10"></div>
             
             <div className="flex items-start gap-4 mb-6">
                 <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <Users className="w-full h-full p-4 text-slate-400" />
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white">Сардор Алиев</h3>
                     <p className="text-sm text-slate-500">Старший менеджер</p>
                     <div className="flex gap-2 mt-2">
                         <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Работает</span>
                         <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">Штат</span>
                     </div>
                 </div>
             </div>

             <div className="space-y-2">
                 <div className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                         <FileText className="w-4 h-4" />
                     </div>
                     <div className="flex-1">
                         <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Трудовой договор.pdf</div>
                         <div className="text-[10px] text-slate-400">Подписан 12.01.2024</div>
                     </div>
                 </div>
                 <div className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer group">
                     <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-100 transition-colors">
                         <Calendar className="w-4 h-4" />
                     </div>
                     <div className="flex-1">
                         <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Приказ об отпуске</div>
                         <div className="text-[10px] text-slate-400">Создан автоматически</div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

const MotivationVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full flex flex-col justify-center">
             <div className="text-center mb-6">
                 <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full text-yellow-600 mb-2">
                     <Trophy className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-slate-900 dark:text-white">Бонус за KPI</h4>
                 <p className="text-xs text-slate-500">Выполнение плана продаж</p>
             </div>

             <div className="relative pt-4 px-4">
                 <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                     <span>0%</span>
                     <span>50%</span>
                     <span>100%</span>
                 </div>
                 <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(66,147,33,0.5)]"></div>
                 </div>
                 <div className="absolute top-0 left-[85%] -translate-x-1/2 -translate-y-full mb-1">
                     <div className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                         85%
                     </div>
                 </div>
             </div>

             <div className="mt-6 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="text-xs text-slate-500">Текущий бонус:</div>
                  <div className="text-sm font-bold text-brand-600">+ 1 200 000 UZS</div>
             </div>
        </div>
    )
}

// --- EDI VISUALS ---

const EdiListVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="p-3 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                 <div className="flex gap-2">
                     <div className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm">
                         <Filter className="w-3 h-3 text-slate-400" /> Фильтр
                     </div>
                     <div className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-bold text-slate-500">Входящие</div>
                 </div>
                 <div className="p-1.5 bg-brand-600 text-white rounded-lg">
                     <Download className="w-3 h-3" />
                 </div>
            </div>
            {/* List */}
            <div className="flex-1 p-2 space-y-1 overflow-y-auto">
                 {[
                     { id: 'SF-1023', type: 'Счет-фактура', partner: 'OOO "Tech Supply"', date: '14:20', status: 'signed', amount: '45.2 M' },
                     { id: 'ACT-991', type: 'Акт вып. работ', partner: 'IP "Logistics"', date: 'Вчера', status: 'pending', amount: '12.0 M' },
                     { id: 'DOG-202', type: 'Договор', partner: 'OOO "Mega Stroy"', date: '21 Окт', status: 'rejected', amount: '-' },
                     { id: 'SF-1022', type: 'Счет-фактура', partner: 'OOO "Soft Corp"', date: '20 Окт', status: 'signed', amount: '8.5 M' },
                 ].map((doc, i) => (
                     <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
                          <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${
                                  doc.status === 'signed' ? 'bg-green-100 text-green-600' : 
                                  doc.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                              }`}>
                                  <FileText className="w-4 h-4" />
                              </div>
                              <div>
                                  <div className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-2">
                                      {doc.type} <span className="text-slate-400 font-normal">#{doc.id}</span>
                                  </div>
                                  <div className="text-[10px] text-slate-500 font-medium">{doc.partner}</div>
                              </div>
                          </div>
                          <div className="text-right">
                              <div className="text-xs font-bold text-slate-900 dark:text-slate-200">{doc.amount}</div>
                              <div className={`text-[9px] font-bold uppercase tracking-wider mt-1 ${
                                  doc.status === 'signed' ? 'text-green-600' : 
                                  doc.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                  {doc.status === 'signed' ? 'Подписан' : doc.status === 'pending' ? 'Ожидает' : 'Отклонен'}
                              </div>
                          </div>
                     </div>
                 ))}
            </div>
        </div>
    )
}

const EdiSignVisual = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 w-full max-w-sm overflow-hidden relative">
                 <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
                     <div className="font-bold text-sm flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> E-IMZO Sign</div>
                     <MoreHorizontal className="w-4 h-4 opacity-70" />
                 </div>
                 <div className="p-6">
                      <div className="mb-4">
                          <label className="text-xs font-bold text-slate-500 block mb-1.5 uppercase tracking-wider">Выберите ключ</label>
                          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-brand-400 transition-colors">
                               <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                                   <Key className="w-4 h-4" />
                               </div>
                               <div>
                                   <div className="text-xs font-bold text-slate-800 dark:text-white">ALIYEV SARDOR</div>
                                   <div className="text-[10px] text-slate-400">STIR: 309 881 123</div>
                               </div>
                          </div>
                      </div>
                      <div className="mb-6">
                           <label className="text-xs font-bold text-slate-500 block mb-1.5 uppercase tracking-wider">Пароль</label>
                           <div className="flex gap-2">
                               {[1,2,3,4,5,6].map(i => (
                                   <div key={i} className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                               ))}
                           </div>
                      </div>
                      <button className="w-full py-3 bg-brand-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-brand-500/20 hover:bg-brand-700 transition-all">
                          Подписать документ
                      </button>
                 </div>
            </div>
        </div>
    )
}

const EdiRoamingVisual = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50/50 to-transparent dark:from-brand-900/10"></div>
             
             {/* Center Hub */}
             <div className="relative z-10 w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border-4 border-brand-100 dark:border-brand-900 mb-8">
                 <div className="text-2xl font-black text-brand-600">CFO</div>
                 <div className="absolute -bottom-2 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">HUB</div>
             </div>

             {/* Satellites */}
             <div className="flex justify-center gap-4 md:gap-8 w-full">
                 {[
                     { name: 'Soliq', color: 'bg-blue-600' },
                     { name: 'Didox', color: 'bg-indigo-600' },
                     { name: 'E-Factura', color: 'bg-purple-600' }
                 ].map((op, i) => (
                     <div key={i} className="flex flex-col items-center group">
                         <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-700 mb-2 relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-400 animate-slideDown"></div>
                         </div>
                         <div className={`px-4 py-2 rounded-xl text-white font-bold text-xs shadow-lg transform group-hover:-translate-y-1 transition-transform ${op.color}`}>
                             {op.name}
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    )
}

// --- WAREHOUSE VISUALS ---

const WarehouseInventoryVisual = () => {
    const products = [
        { name: 'Iphone 15 Pro', sku: 'APL-15P-128', qty: 12, max: 50, status: 'low' },
        { name: 'Macbook Air M2', sku: 'APL-AIR-M2', qty: 45, max: 50, status: 'ok' },
        { name: 'Samsung S24', sku: 'SAM-S24-ULT', qty: 8, max: 40, status: 'critical' },
        { name: 'Airpods Pro 2', sku: 'APL-POD-2', qty: 88, max: 100, status: 'ok' },
        { name: 'PlayStation 5', sku: 'SNY-PS5-DIG', qty: 5, max: 20, status: 'low' },
        { name: 'Dyson V15', sku: 'DYN-V15-ABS', qty: 15, max: 15, status: 'ok' },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full p-4 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-4 shrink-0">
                <h4 className="font-bold text-slate-800 dark:text-white">Остатки на складе</h4>
                <div className="text-xs text-brand-600 font-bold bg-brand-50 px-2 py-1 rounded">Основной</div>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-1 scrollbar-thin">
                {products.map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                                <Box className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-800 dark:text-white">{p.name}</div>
                                <div className="text-[10px] text-slate-400">{p.sku}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end w-24">
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{p.qty} шт</div>
                            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full mt-1 overflow-hidden">
                                <div 
                                    className={`h-full rounded-full ${p.status === 'ok' ? 'bg-green-500' : p.status === 'low' ? 'bg-yellow-500' : 'bg-red-500'}`} 
                                    style={{ width: `${(p.qty / p.max) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const WarehouseScannerVisual = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl bg-slate-900">
            {/* Camera View Simulation */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
            
            {/* Scanner UI Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-64 h-32 border-2 border-white/50 rounded-2xl relative mb-8 flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-500 -mt-0.5 -ml-0.5"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-500 -mt-0.5 -mr-0.5"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-500 -mb-0.5 -ml-0.5"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-500 -mb-0.5 -mr-0.5"></div>
                    <div className="w-full h-0.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-scan"></div>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl w-full max-w-xs shadow-2xl animate-in slide-in-from-bottom-4">
                     <div className="flex items-start gap-3">
                         <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center">
                             <CheckCircle2 className="w-6 h-6" />
                         </div>
                         <div>
                             <div className="text-xs text-slate-500 font-bold uppercase">Успешно</div>
                             <div className="font-bold text-slate-900 text-sm">Coca-Cola 0.5L</div>
                             <div className="text-xs text-slate-600">Штрихкод: 478000123456</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

// --- BANK VISUALS ---

const BankAccountsVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full p-6 flex flex-col justify-center gap-4">
             {/* Account 1 */}
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 text-white shadow-xl relative overflow-hidden group hover:scale-105 transition-transform">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                 <div className="flex justify-between items-start mb-3">
                     <div className="text-[10px] opacity-70 uppercase tracking-wider">Основной счет</div>
                     <Landmark className="w-4 h-4 opacity-50" />
                 </div>
                 <div className="text-base font-bold mb-1 truncate">142 000 000 UZS</div>
                 <div className="flex justify-between items-center text-[10px] opacity-70">
                     <span>**** 4582</span>
                     <span>Kapitalbank</span>
                 </div>
             </div>

             {/* Account 2 */}
             <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white shadow-xl relative overflow-hidden group hover:scale-105 transition-transform">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                 <div className="flex justify-between items-start mb-3">
                     <div className="text-[10px] opacity-70 uppercase tracking-wider">Корпоративный</div>
                     <CreditCard className="w-4 h-4 opacity-50" />
                 </div>
                 <div className="text-base font-bold mb-1 truncate">4 500 USD</div>
                 <div className="flex justify-between items-center text-[10px] opacity-70">
                     <span>**** 9901</span>
                     <span>TBC Bank</span>
                 </div>
             </div>
        </div>
    )
}

const BankCalendarVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full p-6 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-6 shrink-0">
                <h4 className="font-bold text-slate-800 dark:text-white">Платежный календарь</h4>
                <Calendar className="w-4 h-4 text-slate-400" />
            </div>
            
            <div className="space-y-4 relative overflow-y-auto flex-1 pr-1 scrollbar-thin">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100 dark:bg-slate-800"></div>

                {[
                    { day: '25', month: 'Окт', title: 'Оплата налогов', amount: '- 12.0M', type: 'tax' },
                    { day: '28', month: 'Окт', title: 'Поступление', amount: '+ 45.0M', type: 'inc' },
                    { day: '01', month: 'Ноя', title: 'Аренда офиса', amount: '- 8.0M', type: 'exp' },
                    { day: '05', month: 'Ноя', title: 'Зарплата', amount: '- 25.0M', type: 'exp' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 relative z-10">
                         <div className="flex flex-col items-center justify-center w-8 h-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm text-[10px] font-bold text-slate-600 shrink-0">
                             <span>{item.day}</span>
                         </div>
                         <div className="flex-1 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex justify-between items-center">
                             <div className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate max-w-[80px]">{item.title}</div>
                             <div className={`text-xs font-bold ${
                                 item.type === 'inc' ? 'text-green-600' : 
                                 item.type === 'tax' ? 'text-orange-500' : 'text-slate-600'
                             }`}>
                                 {item.amount}
                             </div>
                         </div>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] text-slate-500 bg-yellow-50 p-2 rounded-lg border border-yellow-100 shrink-0">
                <AlertTriangle className="w-3 h-3 text-yellow-600" />
                <span>Кассовый разрыв 5 Ноября!</span>
            </div>
        </div>
    )
}

const CashRegisterVisual = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 w-full h-full p-6 flex flex-col justify-center gap-4">
             <div className="flex justify-between items-center mb-2">
                 <h4 className="font-bold text-slate-800 dark:text-white">Онлайн Кассы</h4>
                 <div className="flex items-center gap-1.5 px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold">
                     <Power className="w-3 h-3" /> Online
                 </div>
             </div>

             {/* Terminal 1 */}
             <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-600 shadow-sm">
                         <Printer className="w-5 h-5" />
                     </div>
                     <div>
                         <div className="text-xs font-bold text-slate-800 dark:text-white">PAX A930</div>
                         <div className="text-[10px] text-slate-500">Магазин №1</div>
                     </div>
                 </div>
                 <div className="text-right">
                     <div className="text-sm font-bold text-slate-900 dark:text-white">1.2M UZS</div>
                     <div className="text-[10px] text-green-600 font-bold">Смена открыта</div>
                 </div>
             </div>

             {/* Terminal 2 */}
             <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex justify-between items-center opacity-80">
                 <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-600 shadow-sm">
                         <CreditCard className="w-5 h-5" />
                     </div>
                     <div>
                         <div className="text-xs font-bold text-slate-800 dark:text-white">Uzum Kassa</div>
                         <div className="text-[10px] text-slate-500">Доставка</div>
                     </div>
                 </div>
                 <div className="text-right">
                     <div className="text-sm font-bold text-slate-900 dark:text-white">4.5M UZS</div>
                     <div className="text-[10px] text-slate-400 font-bold">Z-отчет снят</div>
                 </div>
             </div>
        </div>
    )
}

const ModulePage: React.FC<ModulePageProps> = ({ content, lang, onBack }) => {
  const t = TRANSLATIONS[lang];
  const isFinance = content.title.includes('Финансовый') || content.title.includes('Financial');

  return (
    <div className="pt-32 pb-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button 
            onClick={onBack} 
            className="flex items-center text-slate-500 hover:text-brand-600 font-bold group transition-colors"
        >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> 
            {t.back_home}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 font-bold text-xs uppercase tracking-wider border border-brand-100 dark:border-brand-900">
                    {content.subtitle}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
                    {content.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    {content.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <a href="https://app.cfo.uz/auth?tab=2" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1">
                        {t.try_module}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                             <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                             {benefit}
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full relative">
                 <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl relative">
                    {/* Render Hero Visual Based on Content Key if possible, or generic */}
                    {isFinance ? (
                        <HeroDashboardVisual />
                    ) : (
                         <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-8">
                            {content.sections && content.sections[0] && content.sections[0].visualKey === 'edi_list' ? (
                                <EdiListVisual />
                            ) : content.sections && content.sections[0] && content.sections[0].visualKey === 'warehouse_dashboard' ? (
                                <WarehouseInventoryVisual />
                            ) : content.sections && content.sections[0] && content.sections[0].visualKey === 'bank_accounts' ? (
                                <BankAccountsVisual />
                            ) : (
                                <div className="text-center">
                                     <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                         <Layers className="w-8 h-8 text-brand-600" />
                                     </div>
                                     <p className="text-slate-400 font-bold">Интерфейс модуля</p>
                                </div>
                            )}
                        </div>
                    )}
                 </div>
            </div>
        </div>

        {/* Detailed Sections (Zig-Zag) */}
        {content.sections && (
            <div className="space-y-24 mb-24">
                {content.sections.map((section, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${section.reverse ? 'md:flex-row-reverse' : ''}`}>
                         <div className="flex-1 space-y-4">
                             <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-display">
                                 {section.title}
                             </h3>
                             <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                 {section.description}
                             </p>
                         </div>
                         <div className="flex-1 w-full">
                             <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-4 md:p-8 border border-slate-200 dark:border-slate-700/50 shadow-inner h-80 flex items-center justify-center">
                                 {section.visualKey === 'pnl' && <PnLVisual />}
                                 {section.visualKey === 'cashflow' && <CashflowVisual />}
                                 {section.visualKey === 'projects' && <ProjectsVisual />}
                                 {section.visualKey === 'payroll' && <PayrollVisual />}
                                 {section.visualKey === 'hr_admin' && <HrAdminVisual />}
                                 {section.visualKey === 'motivation' && <MotivationVisual />}
                                 
                                 {/* NEW VISUALS */}
                                 {section.visualKey === 'edi_list' && <EdiListVisual />}
                                 {section.visualKey === 'edi_sign' && <EdiSignVisual />}
                                 {section.visualKey === 'edi_roaming' && <EdiRoamingVisual />}
                                 
                                 {section.visualKey === 'warehouse_dashboard' && <WarehouseInventoryVisual />}
                                 {section.visualKey === 'warehouse_scanner' && <WarehouseScannerVisual />}
                                 
                                 {section.visualKey === 'bank_accounts' && <BankAccountsVisual />}
                                 {section.visualKey === 'bank_calendar' && <BankCalendarVisual />}
                                 {section.visualKey === 'cash_register' && <CashRegisterVisual />}
                             </div>
                         </div>
                    </div>
                ))}
            </div>
        )}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center mb-6">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </div>
            ))}
        </div>

      </div>

      {/* CTA Bottom Section (New) */}
      <section className="py-24 bg-brand-900 dark:bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                {content.title}
            </h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                Начните использовать современные инструменты уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://app.cfo.uz/auth?tab=2" className="px-10 py-5 bg-brand-400 text-brand-950 rounded-2xl font-extrabold hover:bg-white transition-all shadow-xl shadow-brand-900/50 text-lg">
                    Попробовать бесплатно
                </a>
            </div>
            <p className="mt-6 text-brand-200/60 text-sm">Не требует установки. Работает в облаке.</p>
        </div>
      </section>

    </div>
  );
};

export default ModulePage;