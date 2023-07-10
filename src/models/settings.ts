export interface Settings {
  id: string; //string
  author_user_id: string; //author_user_id
  company_id: string; //company_id
  created_at: number; // created_at
  settings_billing_bank: string;
  settings_billing_bik: string;
  settings_billing_bill: string;
  [key: string]: any;
}
