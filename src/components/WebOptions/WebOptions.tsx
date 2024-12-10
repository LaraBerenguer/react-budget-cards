import { useContext, useState } from "react";
import { webOptionsContent } from '../Pricing/Pricing';
import ColorfulBtn from "../Button/ColorfulBtn";
import InfoModal from '../InfoModal/InfoModal';


export default function WebOptions() {

    //Getting context
    let webContext = useContext(webOptionsContent);
    let { page, setPage, lang, setLang } = webContext;

    //Info states
    const [openInfoPage, setOpenInfoPage] = useState<boolean>(false);
    console.log("Parent render, openInfoPage:", openInfoPage);
    const [openInfoLang, setOpenInfoLang] = useState<boolean>(false);

    //Handle Inputs
    const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const pageAsNumber = Number(e.target.value);
        setPage(pageAsNumber);
    }

    const handleLangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const langAsNumber = Number(e.target.value);
        setLang(langAsNumber);
    }

    return (
        <div className='webOptionContainer bg-transparent mx-auto my-5 max-w-2xl w-9/10 flex flex-col'>
            <div className='pagesContainer flex flex-row justify-end'>
                <label className="flex flex-row">
                    <button onClick={(e) => setOpenInfoPage(true)}>HOLA</button>
                    <InfoModal open={openInfoPage} onClose={() => {console.log('Cerrar modal padre'); setOpenInfoPage(false);}}/>
                    <p>Number of pages</p>
                    <button className="text-custom-gray border rounded-full text-sm p-1 m-1 inline-flex items-center" onClick={() => {
                        if (page < 1) {
                            setPage(0)
                        } else { setPage(page - 1) }
                    }}> - </button>
                    <input className="w-7 h-8 rounded-lg mx-1"
                        name="pagesInput"
                        type="number"
                        placeholder="0"
                        value={page}
                        onChange={handlePageInput}
                        id="pagesInput"
                    />
                </label>
                <button className="text-custom-gray border rounded-full text-sm p-1 m-1 inline-flex items-center" onClick={() => setPage(page + 1)}> + </button>
            </div>
            <div className='langContainer flex flex-row justify-end'>
                <label className="flex flex-row">
                    <ColorfulBtn onClick={() => setOpenInfoLang(true)} />
                    <InfoModal open={openInfoLang} onClose={() => setOpenInfoLang(false)} />
                    <p>Number of languages</p>
                    <button className="text-custom-gray border rounded-full text-sm p-1 m-1 inline-flex items-center" onClick={() => {
                        if (lang < 1) {
                            setLang(0)
                        } else { setLang(lang - 1) }
                    }}> - </button>
                    <input className="w-7 h-8 rounded-lg mx-1"
                        name="langInput"
                        type="number"
                        placeholder="0"
                        value={lang}
                        onChange={handleLangInput}
                        id="langInput"
                    />
                </label>
                <button className="text-custom-gray border rounded-full text-sm p-1 m-1 inline-flex items-center" onClick={() => setLang(lang + 1)}> + </button>
            </div>
        </div>
    )
};