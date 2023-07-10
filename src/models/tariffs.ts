export interface Tariff {
  id: string;
  author_user_id: string;
  company_id: string;
  created_at: number;
  tariff_name: string;
  tariff_deposit: number;
  tariff_comment: string;
  durations: [];
  [key: string]: any;
}
