import { useState } from 'react';
import FilterProps from '../Form/Form';
import { FinalData } from "../../interfaces/FinalData";

export interface FilterProps {
    list: FinalData[];
    unorderedList: FinalData[];
    setBudgetList: React.Dispatch<React.SetStateAction<FinalData[]>>
}

export default function Filters({ list, unorderedList, setBudgetList }: FilterProps) {    

    const [ascending, setAscending] = useState(true);

    function searchBar(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value;
        const filteredSearch = unorderedList.filter((item: FinalData) => 
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setBudgetList(filteredSearch);
    };
    
    function alphOrder() {
        resetOrder();
        if (!list || list.length === 0) { console.log("List is empty") }
        else {
            const alphSorted: FinalData[] = JSON.parse(JSON.stringify(list))
                .sort((a: FinalData, b: FinalData) => a.name.localeCompare(b.name));            
            setBudgetList(alphSorted);
        }
    };

    function dateOrder() {
        resetOrder();
        if (!list || list.length === 0) { console.log("List is empty") }
        else {
            setAscending(!ascending)

            const dateSortedAsc = [...list].sort((a: FinalData, b: FinalData) => a.date.getTime() - b.date.getTime());
            const dateSortedDes = [...list].sort((a: FinalData, b: FinalData) => b.date.getTime() - a.date.getTime());

            ascending ? setBudgetList(dateSortedDes) : setBudgetList(dateSortedAsc);
        }
    };
    
    function resetOrder() {
        if (!list || list.length === 0) { console.log("List is empty") }
        else {
            setBudgetList(unorderedList);
        }
    };

    return (
        <div className="filtersContainer mx-auto my-5 max-w-2xl w-9/10 flex justify-end items-center space-x-2">
            <label className="input  flex items-center gap-2 w-1/4 bg-transparent">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 text-white opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
                <input type="text" onChange={searchBar} className="grow w-full bg-transparent text-white" placeholder="Search" />
            </label>
            <div className="alphOrderContainer">
                <button type="button" onClick={alphOrder} className="alphOrder btn btn-xs">A-Z</button>
            </div>
            <div className="dateOrderContainer">
                <button type="button" onClick={dateOrder} className="dateOrder btn btn-xs">
                    Date {ascending ? '▼' : '▲'}
                </button>
            </div>
            <div className="resetOrderContainer">
                <button type="button" onClick={resetOrder} className="resetOrder btn btn-xs">Reset</button>
            </div>
        </div>
    )
};

