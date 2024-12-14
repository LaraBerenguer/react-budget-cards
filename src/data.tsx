export interface Data {
    id: number,
    name: string,
    description: string,
    price: number
};

//crear interface datra en otro fichero y que lo importen tanto data como pricing

const services: Data[] = [{
    id: 1,
    name: "Seo",
    description: "A complete responsive website",
    price: 300
},
{
    id: 2,
    name: "Ads",
    description: "Your advertising campaign",
    price: 400

},
{
    id: 3,
    name: "Web",
    description: "Your entire website",
    price: 500
}];

export default services;



