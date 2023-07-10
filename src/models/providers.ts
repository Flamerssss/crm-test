export interface Provider {
  id: string; //string
  author_user_id: string; //author_user_id
  company_id: string; //company_id
  created_at: number; // created_at
  providers_name: string;
  providers_site: string;
  providers_phone: string;
  providers_email: string;
  providers_type: string;
  providers_legal_name: string;
  providers_address: string;
  providers_contact_person: string;
  providers_comment: string;
  [key: string]: any;
}
