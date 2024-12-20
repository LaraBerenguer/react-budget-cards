
export interface FinalData {
    name: string;
    phone: string;
    email: string;
    services: { name: string; id: number; }[];
    page?: number;
    lang?: number;
    price: number;
    date: Date;
}
