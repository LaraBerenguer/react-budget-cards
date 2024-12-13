import { useState } from 'react';
import FilterProps from '../Form/Form';
import { FinalData } from '../Form/Form';

export interface FilterProps {
    list: FinalData[];
    unorderedList: FinalData[];
    setBudgetList: React.Dispatch<React.SetStateAction<FinalData[]>>
}

export default function Filters({ list, unorderedList, setBudgetList }: FilterProps) {    

    // Alphabetical Order
    function alphOrder() {
        if (!list || list.length === 0) { console.log("List is empty") }
        else {
            const alphSorted: FinalData[] = JSON.parse(JSON.stringify(list))
                .sort((a: FinalData, b: FinalData) => a.name.localeCompare(b.name));
            console.log("Sort by alph: ", alphSorted)
            setBudgetList(alphSorted);
        }
    };

    //Date Order
    const [ascending, setAscending] = useState(true);

    function dateOrder() {
        if (!list || list.length === 0) { console.log("List is empty") }
        else {
            setAscending(!ascending)

            const dateSortedAsc = [...list].sort((a: FinalData, b: FinalData) => a.date.getTime() - b.date.getTime());
            const dateSortedDes = [...list].sort((a: FinalData, b: FinalData) => b.date.getTime() - a.date.getTime());

            console.log("Sort by date: ", dateSortedAsc);
            console.log("Sort by other date: ", dateSortedDes);

            ascending ? setBudgetList(dateSortedDes) : setBudgetList(dateSortedAsc);
        }
    };

    // Reset Order
    function resetOrder() {
        if (!list || list.length === 0) { console.log("List is empty") }
    else {
        setBudgetList(unorderedList);
    }       
    };

    return (
        <div className="filtersContainer">
            <label className="input input-bordered flex items-center gap-2 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
                <input type="text" className="grow w-full" placeholder="Search" />
            </label>
            <div className="alphOrderContainer">
                <button type="button" onClick={alphOrder} className="alphOrder btn btn-xs">A-Z</button>
            </div>
            <div className="dateOrderContainer">
                <button type="button" onClick={dateOrder} className="dateOrder btn btn-xs">
                    Date {ascending ? '▲' : '▼'}
                </button>
            </div>
            <div className="resetOrderContainer">
                <button type="button" onClick={resetOrder} className="resetOrder btn btn-xs">Reset</button>
            </div>
        </div>
    )
};

