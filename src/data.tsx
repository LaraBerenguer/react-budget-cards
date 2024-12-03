interface Data {
    id: number,
    name: string,
    description: string,
    price: number
};

const services: Data[] = [{
    id: 1,
    name: "Seo",
    description: "Hacer una campaña SEO",
    price: 300
},
{
    id: 2,
    name: "Ads",
    description: "Hacer una campaña de publicidad",
    price: 400

},
{
    id: 3,
    name: "Web",
    description: "Hacer una página web",
    price: 500
}];

export default services;



