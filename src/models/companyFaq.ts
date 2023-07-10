export interface CompanyFaq {
  id: string;
  author_user_id: string;
  company_id: string;
  created_at: number;
  description: string;
  title: string;
  number: number;
  [key: string]: any;
}
