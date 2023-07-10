export interface Item {
  id: string; //string
  author_user_id: string; //author_user_id
  company_id: string; //company_id
  created_at: number; // created_at
  item_name: string;
  item_brand: string;
  item_article: string;
  item_availability: string;
  [key: string]: any;
}
