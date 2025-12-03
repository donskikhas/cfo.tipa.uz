
import React from 'react';
import { 
  FileText, 
  Landmark, 
  Box,
  FileCheck,
  Users,
  Briefcase,
  Calculator,
  Zap,
  Shield,
  RefreshCw,
  Search,
  FileSignature,
  Target,
  UserCheck,
  CreditCard,
  FileClock,
  BarChart3,
  PieChart,
  AlertTriangle
} from 'lucide-react';
import { FeatureItem, NavItem, PricingPlan, ModuleItem, Translation, Language, ModuleDetailContent, ComparisonRow } from './types';

export const MODULES: ModuleItem[] = [
  {
    id: 'finance',
    title: {
      ru: 'Финансовый учет',
      uz: 'Moliyaviy hisob',
      en: 'Financial Accounting'
    },
    status: 'active',
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    id: 'edo',
    title: {
      ru: 'ЭДО',
      uz: 'E-Hujjat',
      en: 'EDI'
    },
    status: 'active',
    icon: <FileCheck className="w-5 h-5" />
  },
  {
    id: 'warehouse',
    title: {
      ru: 'Склад',
      uz: 'Ombor',
      en: 'Warehouse'
    },
    status: 'active',
    icon: <Box className="w-5 h-5" />
  },
  {
    id: 'bank',
    title: {
      ru: 'Банк и касса',
      uz: 'Bank va kassa',
      en: 'Bank & Cash'
    },
    status: 'active',
    icon: <Landmark className="w-5 h-5" />
  },
  {
    id: 'hr',
    title: {
      ru: 'Кадры и зарплата',
      uz: 'Kadrlar va ish haqi',
      en: 'HR & Payroll'
    },
    status: 'expected',
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 'assets',
    title: {
      ru: 'ОС и НМА',
      uz: 'Asosiy vositalar',
      en: 'Fixed Assets'
    },
    status: 'expected',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: 'taxes',
    title: {
      ru: 'Налоги',
      uz: 'Soliqlar',
      en: 'Taxes'
    },
    status: 'expected',
    icon: <Calculator className="w-5 h-5" />
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'features', label: { ru: 'Возможности', uz: 'Imkoniyatlar', en: 'Features' }, href: '#features', hasDropdown: true },
  { id: 'process', label: { ru: 'Как это работает', uz: 'Qanday ishlaydi', en: 'How it works' }, href: '#process' },
  { id: 'pricing', label: { ru: 'Тарифы', uz: 'Tariflar', en: 'Pricing' }, href: '#pricing' },
  { id: 'contact', label: { ru: 'Контакты', uz: 'Kontaktlar', en: 'Contacts' }, href: '#contact' },
];

export const TRANSLATIONS: Record<Language, Translation> = {
  ru: {
    hero_badge: 'Официальные источники данных',
    hero_title_1: 'Финансовая отчетность',
    hero_title_highlight: 'на автопилоте',
    hero_subtitle: 'Мы соединили Soliq и Банки в одном окне. Система сама соберет Баланс и P&L для налоговой. Вам остаются инструменты для работы: ЭДО, Склад и Банкинг.',
    hero_cta_app: 'Войти в систему',
    hero_cta_how: 'Как это работает?',
    integration_soliq: 'Интеграция с ГНК (Soliq)',
    integration_bank: 'Данные из всех банков РУз',
    modules_title: 'Модули системы',
    modules_subtitle: 'Все, что нужно для управления финансами',
    how_title: 'От "первички" до отчета',
    how_subtitle: 'Прозрачный процесс',
    how_desc: 'Мы агрегатор, а не просто программа учета. Данные о продажах, налогах и движениях по счету попадают к нам напрямую из первоисточников.',
    pricing_title: 'Прозрачные тарифы',
    pricing_subtitle: 'Начните бесплатно, платите по мере роста бизнеса',
    pricing_cta_free: 'Начать бесплатно',
    pricing_cta_buy: 'Выбрать тариф',
    pricing_cta_contact: 'Связаться с нами',
    footer_desc: 'Умная финансовая платформа для бизнеса в Узбекистане. Автоматизация отчетности и управленческого учета.',
    footer_product: 'Продукт',
    footer_docs: 'Документы',
    footer_contacts: 'Контакты',
    footer_rights: '© 2024 CFO.uz. Все права защищены.',
    login: 'Войти',
    create_account: 'Создать аккаунт',
    status_active: 'Активно',
    status_soon: 'Ожидается',
    privacy_policy: 'Политика конфиденциальности',
    public_offer: 'Публичная оферта',
    back_home: 'Назад на главную',
    try_module: 'Подключить модуль'
  },
  uz: {
    hero_badge: 'Rasmiy ma\'lumotlar manbalari',
    hero_title_1: 'Moliyaviy hisobot',
    hero_title_highlight: 'avtopilot rejimida',
    hero_subtitle: 'Biz Soliq va Banklarni bir oynada birlashtirdik. Tizim soliq uchun balans va P&Lni avtomatik yig\'adi. Siz uchun ish qurollari: E-Hujjat, Ombor va Banking.',
    hero_cta_app: 'Tizimga kirish',
    hero_cta_how: 'Qanday ishlaydi?',
    integration_soliq: 'DSQ (Soliq) integratsiyasi',
    integration_bank: 'O\'zbekiston barcha banklari',
    modules_title: 'Tizim modullari',
    modules_subtitle: 'Moliyani boshqarish uchun barcha vositalar',
    how_title: '"Boshlang\'ich"dan hisobotgacha',
    how_subtitle: 'Shaffof jarayon',
    how_desc: 'Biz shunchaki hisob dasturi emas, balki agregatormiz. Savdo, soliqlar va hisob raqam harakatlari to\'g\'ridan-to\'g\'ri manbalardan keladi.',
    pricing_title: 'Shaffof tariflar',
    pricing_subtitle: 'Bepul boshlang, o\'sish sari to\'lang',
    pricing_cta_free: 'Bepul boshlash',
    pricing_cta_buy: 'Tarifni tanlash',
    pricing_cta_contact: 'Biz bilan bog\'lanish',
    footer_desc: 'O\'zbekiston biznesi uchun aqlli moliyaviy platforma. Hisobot va boshqaruv hisobini avtomatlashtirish.',
    footer_product: 'Mahsulot',
    footer_docs: 'Hujjatlar',
    footer_contacts: 'Kontaktlar',
    footer_rights: '© 2024 CFO.uz. Barcha huquqlar himoyalangan.',
    login: 'Kirish',
    create_account: 'Hisob yaratish',
    status_active: 'Faol',
    status_soon: 'Tez orada',
    privacy_policy: 'Maxfiylik siyosati',
    public_offer: 'Ommaviy oferta',
    back_home: 'Bosh sahifaga qaytish',
    try_module: 'Modulni ulash'
  },
  en: {
    hero_badge: 'Official Data Sources',
    hero_title_1: 'Financial Reporting',
    hero_title_highlight: 'on Autopilot',
    hero_subtitle: 'We unified Soliq and Banks in one window. The system automatically assembles Balance Sheet and P&L for tax authorities. You get tools for work: EDI, Warehouse, and Banking.',
    hero_cta_app: 'Enter System',
    hero_cta_how: 'How it works?',
    integration_soliq: 'Soliq Integration',
    integration_bank: 'All Uzbekistan Banks',
    modules_title: 'System Modules',
    modules_subtitle: 'Everything needed for financial management',
    how_title: 'From Invoice to Report',
    how_subtitle: 'Transparent Process',
    how_desc: 'We are an aggregator, not just accounting software. Sales, tax, and bank transaction data come directly from sources.',
    pricing_title: 'Transparent Pricing',
    pricing_subtitle: 'Start free, pay as you grow',
    pricing_cta_free: 'Start Free',
    pricing_cta_buy: 'Select Plan',
    pricing_cta_contact: 'Contact Us',
    footer_desc: 'Smart financial platform for business in Uzbekistan. Automated reporting and management accounting.',
    footer_product: 'Product',
    footer_docs: 'Documents',
    footer_contacts: 'Contacts',
    footer_rights: '© 2024 CFO.uz. All rights reserved.',
    login: 'Log In',
    create_account: 'Create Account',
    status_active: 'Active',
    status_soon: 'Coming Soon',
    privacy_policy: 'Privacy Policy',
    public_offer: 'Public Offer',
    back_home: 'Back to Home',
    try_module: 'Connect Module'
  }
};

// Data for Mobile Cards (Simplified)
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'default',
    title: { ru: 'Default', uz: 'Default', en: 'Default' },
    price: { ru: '0', uz: '0', en: '0' },
    period: { ru: '/месяц', uz: '/oyiga', en: '/month' },
    features: [
      { ru: 'Все функции Lite (До 100 док)', uz: 'Lite funksiyalari (100 gacha)', en: 'All Lite features (Up to 100)' },
      { ru: 'Шаблоны документов', uz: 'Hujjat shablonlari', en: 'Document templates' },
      { ru: 'Проверка контрагента', uz: 'Kontragent tekshiruvi', en: 'Counterparty check' },
    ],
    description: { ru: 'Для старта', uz: 'Boshlash uchun', en: 'For start' },
    cta: 'free'
  },
  {
    name: 'lite',
    title: { ru: 'Lite', uz: 'Lite', en: 'Lite' },
    price: { ru: '499.000 сум', uz: '499.000 so\'m', en: '499.000 UZS' },
    period: { ru: '/месяц', uz: '/oyiga', en: '/month' },
    features: [
      { ru: 'Все из Default + 1000 док.', uz: 'Default + 1000 dona', en: 'Default + 1000 docs' },
      { ru: 'Складской учет (Базовый)', uz: 'Ombor hisobi (Bazaviy)', en: 'Warehouse (Basic)' },
      { ru: 'Банк и Касса (1 счет)', uz: 'Bank va Kassa (1 hisob)', en: 'Bank & Cash (1 acc)' },
    ],
    description: { ru: 'Для малого бизнеса', uz: 'Kichik biznes uchun', en: 'For small business' },
    cta: 'buy'
  },
  {
    name: 'standard',
    title: { ru: 'Standard', uz: 'Standard', en: 'Standard' },
    price: { ru: '799.000 сум', uz: '799.000 so\'m', en: '799.000 UZS' },
    period: { ru: '/месяц', uz: '/oyiga', en: '/month' },
    features: [
      { ru: 'Все из Lite + 1500 док.', uz: 'Lite + 1500 dona', en: 'Lite + 1500 docs' },
      { ru: 'Кадры и Зарплата', uz: 'Kadrlar va Ish haqi', en: 'HR & Payroll' },
      { ru: 'Мультибанк', uz: 'Multibank', en: 'Multibank' },
    ],
    description: { ru: 'Оптимальный выбор', uz: 'Optimal tanlov', en: 'Optimal choice' },
    isPopular: true,
    cta: 'buy'
  },
  {
    name: 'pro',
    title: { ru: 'PRO', uz: 'PRO', en: 'PRO' },
    price: { ru: '999.000 сум', uz: '999.000 so\'m', en: '999.000 UZS' },
    period: { ru: '/месяц', uz: '/oyiga', en: '/month' },
    features: [
      { ru: 'Все из Standard', uz: 'Standard dagi hamma narsa', en: 'All from Standard' },
      { ru: 'Онлайн Бухгалтерия', uz: 'Onlayn Buxgalteriya', en: 'Online Accounting' },
      { ru: 'Финансовая отчетность', uz: 'Moliyaviy hisobot', en: 'Financial Reporting' },
    ],
    description: { ru: 'Полный контроль', uz: 'To\'liq nazorat', en: 'Full control' },
    cta: 'buy'
  },
  {
    name: 'vip',
    title: { ru: 'VIP', uz: 'VIP', en: 'VIP' },
    price: { ru: 'Договорная', uz: 'Kelishilgan', en: 'Negotiable' },
    period: { ru: '/месяц', uz: '/oyiga', en: '/month' },
    features: [
      { ru: 'Все модули безлимит', uz: 'Barcha modullar cheksiz', en: 'All modules unlimited' },
      { ru: 'Персональный менеджер', uz: 'Shaxsiy menejer', en: 'Personal manager' },
      { ru: 'Доработка под вас', uz: 'Siz uchun moslashtirish', en: 'Customization' },
    ],
    description: { ru: 'Корпорациям', uz: 'Korporatsiyalar uchun', en: 'For enterprise' },
    cta: 'contact'
  }
];

// Data for Desktop Comparison Table (Matrix)
export const COMPARISON_ROWS: ComparisonRow[] = [
  // --- ЭДО ---
  {
    key: 'edi_limit',
    title: { ru: 'Лимит документов ЭДО', uz: 'E-Hujjat limiti', en: 'EDI Limit' },
    isHeader: true,
    values: { default: '100 шт', lite: '1000 шт', standard: '1500 шт', pro: '1500 шт', vip: '∞ Безлимит' }
  },
  {
    key: 'edi_overage',
    title: { ru: 'Свыше лимита', uz: 'Limitdan ortiq', en: 'Over limit' },
    values: { default: '400 сум', lite: '400 сум', standard: '400 сум', pro: '365 сум', vip: '300 сум' }
  },
  {
    key: 'edi_templates',
    title: { ru: 'Шаблоны и E-IMZO', uz: 'Shablonlar va E-IMZO', en: 'Templates & E-IMZO' },
    values: { default: true, lite: true, standard: true, pro: true, vip: true }
  },
  {
    key: 'counterparty',
    title: { ru: 'Проверка контрагента', uz: 'Kontragent tekshiruvi', en: 'Counterparty check' },
    values: { default: true, lite: true, standard: true, pro: true, vip: true }
  },

  // --- Учет ---
  {
    key: 'warehouse',
    title: { ru: 'Складской учет', uz: 'Ombor hisobi', en: 'Warehouse' },
    isHeader: true,
    values: { default: false, lite: true, standard: true, pro: true, vip: true }
  },
  {
    key: 'bank',
    title: { ru: 'Банк и Касса', uz: 'Bank va Kassa', en: 'Bank & Cash' },
    values: { default: false, lite: true, standard: true, pro: true, vip: true }
  },
  {
    key: 'hr',
    title: { ru: 'Кадры и Зарплата', uz: 'Kadrlar va Ish haqi', en: 'HR & Payroll' },
    values: { default: false, lite: false, standard: true, pro: true, vip: true }
  },

  // --- Отчетность ---
  {
    key: 'accounting',
    title: { ru: 'Онлайн Бухгалтерия', uz: 'Onlayn Buxgalteriya', en: 'Online Accounting' },
    isHeader: true,
    values: { default: false, lite: false, standard: false, pro: true, vip: true }
  },
  {
    key: 'reporting',
    title: { ru: 'Сдача отчетов в ГНК', uz: 'DSQga hisobot topshirish', en: 'Tax Reporting' },
    values: { default: false, lite: false, standard: false, pro: true, vip: true }
  },
  
  // --- Сервис ---
  {
    key: 'support',
    title: { ru: 'Персональный менеджер', uz: 'Shaxsiy menejer', en: 'Personal Manager' },
    values: { default: false, lite: false, standard: false, pro: false, vip: true }
  }
];

// Helper to get Module Content
export const getModuleContent = (id: string, lang: Language): ModuleDetailContent | null => {
  const isRu = lang === 'ru';
  
  if (id === 'finance') {
    return {
      title: isRu ? 'Финансовый учет' : 'Financial Accounting',
      subtitle: isRu ? 'Абсолютный порядок в финансах' : 'Absolute order in finances',
      description: isRu 
        ? 'Система автоматически строит ключевые финансовые отчеты (P&L, Cashflow, Баланс) на основе данных из банков и налоговой. Никакого ручного ввода и ошибок Excel.' 
        : 'The system automatically builds key financial reports (P&L, Cashflow, Balance Sheet) based on data from banks and tax authorities. No manual entry or Excel errors.',
      benefits: isRu 
        ? ['Экономия времени владельца', 'Исключение человеческих ошибок', 'Удаленный контроль бизнеса', 'Финансовая стабильность']
        : ['Save owner time', 'Eliminate human error', 'Remote business control', 'Financial stability'],
      sections: [
        {
          title: isRu ? 'P&L отчет: Прибыль как на ладони' : 'P&L Report: Profit at a glance',
          description: isRu 
            ? 'Видите реальную эффективность бизнеса. Выручка, себестоимость, операционные расходы и чистая прибыль в реальном времени. Сравнивайте периоды (месяц к месяцу, год к году) и находите точки роста.'
            : 'See real business efficiency. Revenue, COGS, OPEX and Net Profit in real-time. Compare periods (MoM, YoY) and find growth points.',
          visualKey: 'pnl',
          reverse: false
        },
        {
          title: isRu ? 'Cashflow: Полный контроль денег' : 'Cashflow: Full money control',
          description: isRu
            ? 'Отслеживайте все поступления и выбытия денег со всех счетов и касс в одном окне. Автоматическое распределение по статьям затрат поможет понять, куда уходят деньги.'
            : 'Track all inflows and outflows from all accounts and cash desks in one window. Automatic allocation by cost items helps understand where money goes.',
          visualKey: 'cashflow',
          reverse: true
        },
        {
          title: isRu ? 'Unit-экономика и Проекты' : 'Unit Economics & Projects',
          description: isRu
            ? 'Ведите учет отдельно по каждому филиалу, проекту или направлению. Понимайте, какая точка приносит прибыль, а какая — убытки, благодаря детализированному разделению потоков.'
            : 'Keep records separately for each branch, project or direction. Understand which point brings profit and which creates losses thanks to detailed flow separation.',
          visualKey: 'projects',
          reverse: false
        }
      ],
      features: [
        {
          title: isRu ? 'Интеграция с банками' : 'Bank Integration',
          desc: isRu ? 'Выписки загружаются автоматически.' : 'Statements uploaded automatically.',
          icon: <Landmark className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Платежный календарь' : 'Payment Calendar',
          desc: isRu ? 'Прогноз кассовых разрывов.' : 'Cash gap forecast.',
          icon: <AlertTriangle className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Бюджетирование' : 'Budgeting',
          desc: isRu ? 'План-факт анализ расходов.' : 'Plan-fact expense analysis.',
          icon: <Target className="w-6 h-6 text-brand-600" />
        }
      ]
    };
  }

  if (id === 'hr') {
    return {
      title: isRu ? 'Кадры и Зарплата' : (lang === 'uz' ? 'Kadrlar va Ish haqi' : 'HR & Payroll'),
      subtitle: isRu ? 'Автоматизируйте рутину' : (lang === 'uz' ? 'Rutinani avtomatlashtiring' : 'Automate routine'),
      description: isRu 
        ? 'Полный цикл управления персоналом: от найма и ведения личных дел до автоматического расчета зарплаты и KPI. Учитываем все налоги и отчисления РУз.' 
        : (lang === 'uz' ? 'Xodimlarni boshqarishning to\'liq tsikli: ishga qabul qilish va shaxsiy ishlarni yuritishdan to ish haqi va KPI ni avtomatik hisoblashgacha. O\'zbekistonning barcha soliqlari va ajratmalarini hisobga olamiz.' : 'Full cycle of personnel management: from hiring and personal files to automatic payroll and KPI calculation. We take into account all taxes and deductions of Uzbekistan.'),
      benefits: isRu 
        ? ['Расчет за 15 минут', 'Прозрачная мотивация', 'Электронные табели', 'Кадровые приказы']
        : (lang === 'uz' ? ['15 daqiqada hisoblash', 'Shaffof motivatsiya', 'Elektron tabellar', 'Kadrlar buyruqlari'] : ['Calculation in 15 mins', 'Transparent motivation', 'Electronic timesheets', 'HR orders']),
      sections: [
        {
          title: isRu ? 'Точный расчет зарплаты' : 'Accurate Payroll',
          description: isRu 
            ? 'Установите свои правила: оклад, процент от продаж, бонусы за KPI или почасовая ставка. Система сама рассчитает итоговую сумму, НДФЛ и соц. налог.'
            : 'Set your rules: salary, sales percentage, KPI bonuses or hourly rate. The system automatically calculates the total amount, personal income tax and social tax.',
          visualKey: 'payroll',
          reverse: false
        },
        {
          title: isRu ? 'Кадровое делопроизводство' : 'HR Administration',
          description: isRu
            ? 'Цифровые личные дела сотрудников. История отпусков, больничных и перемещений. Автоматическая генерация приказов и трудовых договоров в один клик.'
            : 'Digital personal files of employees. History of vacations, sick leaves and transfers. Automatic generation of orders and employment contracts in one click.',
          visualKey: 'hr_admin',
          reverse: true
        },
        {
          title: isRu ? 'Мотивация и KPI' : 'Motivation & KPI',
          description: isRu
            ? 'Сотрудники видят, за что получают деньги. Настройте прозрачную систему бонусов от выполнения плана, среднего чека или количества продаж.'
            : 'Employees see what they get paid for. Set up a transparent bonus system based on plan fulfillment, average check or number of sales.',
          visualKey: 'motivation',
          reverse: false
        }
      ],
      features: [
        {
          title: isRu ? 'Кабинет сотрудника' : 'Employee Portal',
          desc: isRu ? 'Сотрудник видит свой расчетный лист.' : 'Employee sees their payslip.',
          icon: <UserCheck className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Выплаты на карты' : 'Card Payouts',
          desc: isRu ? 'Формирование зарплатной ведомости для банка.' : 'Generating payroll sheet for the bank.',
          icon: <CreditCard className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Учет времени' : 'Time Tracking',
          desc: isRu ? 'Табель рабочего времени.' : 'Working time sheet.',
          icon: <FileClock className="w-6 h-6 text-brand-600" />
        }
      ]
    };
  }

  if (id === 'edo') {
    return {
      title: isRu ? 'Электронный документооборот' : (lang === 'uz' ? 'Elektron hujjat aylanishi' : 'Electronic Data Interchange'),
      subtitle: isRu ? 'Юридически значимый ЭДО внутри системы' : (lang === 'uz' ? 'Tizim ichida yuridik ahamiyatga ega E-Hujjat' : 'Legally significant EDI within the system'),
      description: isRu 
        ? 'Забудьте о бумаге. Обменивайтесь счетами-фактурами, актами и договорами мгновенно. Все документы подписаны E-IMZO и имеют полную юридическую силу в РУз.' 
        : (lang === 'uz' ? 'Qog\'ozni unuting. Hisob-fakturalar, aktlar va shartnomalarni bir zumda almashing. Barcha hujjatlar E-IMZO bilan imzolangan va O\'zbekistonda to\'liq yuridik kuchga ega.' : 'Forget about paper. Exchange invoices, acts, and contracts instantly. All documents are signed with E-IMZO and have full legal force in Uzbekistan.'),
      benefits: isRu 
        ? ['Подписание через E-IMZO', 'Совместимость с Soliq/Didox', 'Архив документов 5 лет', 'Экономия на курьерах']
        : (lang === 'uz' ? ['E-IMZO orqali imzolash', 'Soliq/Didox bilan moslik', '5 yillik hujjatlar arxivi', 'Kuryerlardan tejash'] : ['Signing via E-IMZO', 'Soliq/Didox compatibility', '5-year document archive', 'Courier savings']),
      sections: [
        {
          title: isRu ? 'Единый реестр документов' : 'Unified Document Registry',
          description: isRu 
            ? 'Все входящие и исходящие документы в одном удобном списке. Фильтруйте по статусам (Подписан, Ожидает, Отклонен), контрагентам или датам. Вы больше никогда не потеряете важный акт.'
            : 'All incoming and outgoing documents in one convenient list. Filter by status (Signed, Pending, Rejected), counterparties, or dates. You will never lose an important act again.',
          visualKey: 'edi_list',
          reverse: false
        },
        {
          title: isRu ? 'Подписание E-IMZO' : 'E-IMZO Signing',
          description: isRu
            ? 'Не нужно устанавливать сторонние программы. Модуль работы с ключами E-IMZO встроен прямо в систему. Выберите ключ, введите пароль и подпишите пакет документов за секунды.'
            : 'No need to install third-party software. The E-IMZO key module is built right into the system. Select a key, enter the password, and sign a batch of documents in seconds.',
          visualKey: 'edi_sign',
          reverse: true
        },
        {
          title: isRu ? 'Роуминг со всеми операторами' : 'Roaming with All Operators',
          description: isRu
            ? 'Мы поддерживаем роуминг со всеми популярными операторами ЭДО (Soliq, Didox, E-factura). Ваш контрагент получит документ, даже если использует другую систему.'
            : 'We support roaming with all popular EDI operators (Soliq, Didox, E-factura). Your counterparty will receive the document even if they use a different system.',
          visualKey: 'edi_roaming',
          reverse: false
        }
      ],
      features: [
        {
          title: isRu ? 'Мгновенная отправка' : 'Tezkor yuborish',
          desc: isRu ? 'Документ у контрагента через 1 секунду.' : 'Hujjat 1 soniyada kontragentda bo\'ladi.',
          icon: <Zap className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Статусы доставки' : 'Yetkazib berish statuslari',
          desc: isRu ? 'Видите, когда документ просмотрен и подписан.' : 'Hujjat qachon ko\'rilgan va imzolanganligini ko\'rasiz.',
          icon: <FileSignature className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Шаблоны' : 'Shablonlar',
          desc: isRu ? 'Создавайте типовые договоры в один клик.' : 'Bir bosishda namunaviy shartnomalar yarating.',
          icon: <FileText className="w-6 h-6 text-brand-600" />
        }
      ]
    };
  }

  if (id === 'warehouse') {
    return {
      title: isRu ? 'Складской учет' : (lang === 'uz' ? 'Ombor hisobi' : 'Warehouse Management'),
      subtitle: isRu ? 'Порядок в товарах и остатках' : (lang === 'uz' ? 'Tovarlar va qoldiqlarda tartib' : 'Order in goods and inventory'),
      description: isRu 
        ? 'Управляйте поступлениями, отгрузками и перемещениями товаров. Система автоматически списывает себестоимость по методу FIFO/AVCO и формирует материальные отчеты для бухгалтерии.' 
        : (lang === 'uz' ? 'Tovarlarning kirimi, chiqimi va harakatini boshqaring. Tizim FIFO/AVCO usuli bo\'yicha tannarxni avtomatik hisobdan chiqaradi va buxgalteriya uchun moddiy hisobotlarni shakllantiradi.' : 'Manage receipts, shipments, and transfers of goods. The system automatically writes off costs using FIFO/AVCO and generates material reports for accounting.'),
      benefits: isRu 
        ? ['Партионный учет', 'Расчет себестоимости', 'Инвентаризация со смартфона', 'Синхронизация с ЭСФ']
        : (lang === 'uz' ? ['Partiya hisobi', 'Tannarxni hisoblash', 'Smartfon orqali inventarizatsiya', 'ESF bilan sinxronizatsiya'] : ['Batch tracking', 'Cost calculation', 'Inventory via smartphone', 'Sync with E-Invoices']),
      sections: [
        {
          title: isRu ? 'Реальные остатки и резервы' : 'Real Stock & Reserves',
          description: isRu 
            ? 'Контролируйте остатки на всех складах в режиме реального времени. Видите, сколько товара доступно, сколько в резерве под заказы, а сколько ожидается от поставщиков. Система подсветит позиции, которые заканчиваются.'
            : 'Control stock balances across all warehouses in real-time. See what is available, what is reserved for orders, and what is incoming from suppliers. The system highlights low-stock items.',
          visualKey: 'warehouse_dashboard',
          reverse: false
        },
        {
          title: isRu ? 'Сканер штрихкодов' : 'Barcode Scanner',
          description: isRu
            ? 'Превратите смартфон кладовщика в терминал сбора данных. Приходуйте товары, проводите инвентаризацию и собирайте заказы просто сканируя штрихкоды камерой телефона. Быстро и без ошибок.'
            : 'Turn the warehouseman\'s smartphone into a data collection terminal. Receive goods, conduct inventory, and pick orders simply by scanning barcodes with the phone camera. Fast and error-free.',
          visualKey: 'warehouse_scanner',
          reverse: true
        }
      ],
      features: [
        {
          title: isRu ? 'Партии и сроки' : 'Partiyalar va muddatlar',
          desc: isRu ? 'Учет сроков годности (FEFO).' : 'Yaroqlilik muddatini hisobga olish (FEFO).',
          icon: <Box className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Штрихкоды' : 'Shtrix-kodlar',
          desc: isRu ? 'Генерация и печать этикеток.' : 'Yorliqlarni yaratish va chop etish.',
          icon: <Search className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Мат. отчеты' : 'Moddiy hisobotlar',
          desc: isRu ? 'Готовые формы М-11, М-29.' : 'Tayyor shakllar M-11, M-29.',
          icon: <FileText className="w-6 h-6 text-brand-600" />
        }
      ]
    };
  }

  if (id === 'bank') {
    return {
      title: isRu ? 'Банк и Касса' : (lang === 'uz' ? 'Bank va Kassa' : 'Bank & Cash'),
      subtitle: isRu ? 'Все деньги бизнеса в одном окне' : (lang === 'uz' ? 'Biznesning barcha pullari bir oynada' : 'All business money in one window'),
      description: isRu 
        ? 'Прямая интеграция с банками Узбекистана. Выписки загружаются автоматически, платежи распознаются и разносятся по статьям затрат. Управляйте всеми счетами в одном интерфейсе без токенов и флешек.' 
        : (lang === 'uz' ? 'O\'zbekiston banklari bilan to\'g\'ridan-to\'g\'ri integratsiya. Ko\'chirmalar avtomatik yuklanadi, to\'lovlar tanib olinadi va xarajat moddalari bo\'yicha taqsimlanadi. Barcha hisoblarni token va fleshkalarsiz bitta interfeysda boshqaring.' : 'Direct integration with banks of Uzbekistan. Statements are uploaded automatically, payments are recognized and allocated to cost items. Manage all accounts in one interface without tokens and flash drives.'),
      benefits: isRu 
        ? ['Мультибанк (все счета вместе)', 'Авто-распознавание контрагентов', 'Контроль кассовых разрывов', 'Платежный календарь']
        : (lang === 'uz' ? ['Multibank (barcha hisoblar birga)', 'Kontragentlarni avto-tanib olish', 'Kassa uzilishlarini nazorat qilish', 'To\'lov taqvimi'] : ['Multibank (all accounts together)', 'Auto-recognition of counterparties', 'Cash gap control', 'Payment calendar']),
      sections: [
        {
          title: isRu ? 'Мультибанкинг' : 'Multibanking',
          description: isRu 
            ? 'Подключите счета Kapitalbank, TBC, Ipak Yuli, SQB и других банков. Видите общий остаток денег и историю операций в единой ленте. Не нужно заходить в 5 разных клиент-банков.'
            : 'Connect accounts from Kapitalbank, TBC, Ipak Yuli, SQB and others. See the total cash balance and transaction history in a single feed. No need to log in to 5 different bank clients.',
          visualKey: 'bank_accounts',
          reverse: false
        },
        {
          title: isRu ? 'Платежный календарь' : 'Payment Calendar',
          description: isRu
            ? 'Планируйте будущие выплаты (аренда, зарплата, налоги) и поступления. Система заранее предупредит о кассовом разрыве (нехватке денег), чтобы вы успели принять меры.'
            : 'Plan future payments (rent, salary, taxes) and receipts. The system will warn you in advance about a cash gap (lack of money) so you can take action.',
          visualKey: 'bank_calendar',
          reverse: true
        },
        {
          title: isRu ? 'Интеграция с онлайн-кассами' : 'Integration with Online KKM',
          description: isRu
            ? 'Подключите терминалы PAX, Uzum Kassa и другие. Все Z-отчеты и продажи автоматически попадают в систему. Контролируйте выручку торговых точек в реальном времени.'
            : 'Connect PAX terminals, Uzum Kassa, and others. All Z-reports and sales automatically enter the system. Monitor outlet revenue in real-time.',
          visualKey: 'cash_register',
          reverse: false
        }
      ],
      features: [
        {
          title: isRu ? 'Интеграция' : 'Integratsiya',
          desc: isRu ? 'Работает через официальное API.' : 'Rasmiy API orqali ishlaydi.',
          icon: <Landmark className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Безопасность' : 'Xavfsizlik',
          desc: isRu ? 'Только чтение, без права подписи.' : 'Faqat o\'qish, imzolash huquqisiz.',
          icon: <Shield className="w-6 h-6 text-brand-600" />
        },
        {
          title: isRu ? 'Cashflow' : 'Cashflow',
          desc: isRu ? 'Отчет ДДС строится сам.' : 'Pul oqimi to\'g\'risidagi hisobot o\'zi tuziladi.',
          icon: <PieChart className="w-6 h-6 text-brand-600" />
        }
      ]
    };
  }

  return null;
}