export interface Company {
    id: string;
    name: string;
    tin: string;
    ogrn: string;
    director_name: string;
    city_id: string;
    address: string;
    email: string;
    url: string;
    phone: number;
    whatsapp: number;
    [key: string]: any;
}
