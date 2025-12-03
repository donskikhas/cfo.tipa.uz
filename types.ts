
import { ReactNode } from 'react';

export type Language = 'ru' | 'uz' | 'en';
export type Theme = 'light' | 'dark';
export type PageType = 'home' | 'privacy' | 'offer' | string; // string allows 'module:edo' etc.

export interface ModuleItem {
  id: string;
  title: Record<Language, string>;
  status: 'active' | 'expected';
  icon?: ReactNode;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface NavItem {
  id: string;
  label: Record<Language, string>;
  href: string;
  hasDropdown?: boolean;
}

export interface PricingPlan {
  name: string; // Internal ID
  title: Record<Language, string>; // Display name
  price: Record<Language, string>;
  period: Record<Language, string>;
  features: Record<Language, string>[];
  description: Record<Language, string>; // Bottom text
  isPopular?: boolean;
  cta: string;
}

// New Interface for the Table Row
export interface ComparisonRow {
  key: string;
  title: Record<Language, string>;
  isHeader?: boolean;
  values: {
    default: string | boolean;
    lite: string | boolean;
    standard: string | boolean;
    pro: string | boolean;
    vip: string | boolean;
  };
}

export interface ModuleSection {
  title: string;
  description: string;
  visualKey: 
    | 'dashboard' | 'pnl' | 'cashflow' | 'projects' 
    | 'payroll' | 'hr_admin' | 'motivation'
    | 'edi_dashboard' | 'edi_list' | 'edi_sign' | 'edi_roaming'
    | 'warehouse_dashboard' | 'warehouse_scanner'
    | 'bank_accounts' | 'bank_calendar' | 'cash_register';
  reverse?: boolean;
}

export interface ModuleDetailContent {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[]; // Top highlights (grid 2x2 or row)
  sections?: ModuleSection[]; // Rich content sections (Text + Visual)
  features: {
    title: string;
    desc: string;
    icon: ReactNode;
  }[];
}

export interface Translation {
  hero_badge: string;
  hero_title_1: string;
  hero_title_highlight: string;
  hero_subtitle: string;
  hero_cta_app: string;
  hero_cta_how: string;
  integration_soliq: string;
  integration_bank: string;
  modules_title: string;
  modules_subtitle: string;
  how_title: string;
  how_subtitle: string;
  how_desc: string;
  pricing_title: string;
  pricing_subtitle: string;
  pricing_cta_free: string;
  pricing_cta_buy: string;
  pricing_cta_contact: string;
  footer_desc: string;
  footer_product: string;
  footer_docs: string;
  footer_contacts: string;
  footer_rights: string;
  login: string;
  create_account: string;
  status_active: string;
  status_soon: string;
  privacy_policy: string;
  public_offer: string;
  back_home: string;
  try_module: string;
}