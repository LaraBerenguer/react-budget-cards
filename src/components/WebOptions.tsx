import { useContext } from "react";
import { webOptionsContent } from '../App';


export default function WebOptions() {
    
    let webContext = useContext(webOptionsContent);
    let { page, setPage, lang, setLang } = webContext;


    const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const pageAsNumber = Number(e.target.value);
        setPage(pageAsNumber);
    }

    const handleLangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const langAsNumber = Number(e.target.value);
        setPage(langAsNumber);
    }

    return (
        <div className='webOptionContainer'>
            <div className='pagesContainer'> 
                    <label>
                        Number of pages 
                        <button onClick={() => {
                        if (page < 1) {
                            setPage(0)
                        } else { setPage(page - 1) }
                    }}> - </button>
                        <input
                            name="pagesInput"
                            type="number"
                            defaultValue={0}
                            value={page}
                            onChange={handlePageInput}
                            id="pagesInput"
                        />
                    </label>
                    <button onClick={() => setPage(page + 1)}> + </button>                
            </div>
            <div className='langContainer'>                
                <label>
                    Number of languages 
                    <button onClick={() => {
                    if (lang < 1) {
                        setLang(0)
                    } else { setLang(lang - 1) }
                }}> - </button>
                    <input
                        name="langInput"
                        type="number"
                        defaultValue={0}
                        value={lang}
                        onChange={handleLangInput}
                        id="langInput"
                    />
                </label>
                <button onClick={() => setLang(lang + 1)}> + </button>
            </div>
        </div>
    )
};