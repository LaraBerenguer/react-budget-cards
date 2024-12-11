export interface ModalData {
    id: number,
    title: string,
    description: string,
};

const ModalData: ModalData[] = [{
    id: 1,
    title: "Number of pages",
    description: "Choose the pages your project will have. The cost of each page is 30€."
},
{
    id: 2,
    title: "Number of languages",
    description: "Choose the languages your project will have. The cost of each language is 30€."
}];

export default ModalData;



