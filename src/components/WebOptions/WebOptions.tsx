import { useContext, useState } from "react";
import { webOptionsContent } from '../Pricing/Pricing';
import ColorfulBtn from "../Button/ColorfulBtn";
import InfoModal from '../InfoModal/InfoModal';


export default function WebOptions() {

    //Getting context
    let webContext = useContext(webOptionsContent);
    let { page, setPage, lang, setLang } = webContext;

    //Handling Info buttons
    const [openInfoPage, setOpenInfoPage] = useState<boolean>(false);

    function openPage() {
        setOpenInfoPage(true);
    };

    function closePage() {
        setOpenInfoPage(false);
    };

    const [openInfoLang, setOpenInfoLang] = useState<boolean>(false);

    function openLang() {
        setOpenInfoLang(true);
    };

    function closeLang() {
        setOpenInfoLang(false);
    };

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
        <div className='webOptionContainer bg-transparent mx-auto my-5 max-w-2xl w-9/10 flex flex-col items-end'>
            <div className='pagesContainer flex flex-row items-center my-1'>
                <label className="flex flex-row items-center">
                    <div className="mx-2">
                        <ColorfulBtn onClick={openPage} />
                    </div>
                    <InfoModal isOpen={openInfoPage} onClose={closePage} idNumber={1} />

                    <p className="text-white">Number of pages</p>
                    <button className="text-custom-gray items-center justify-center w-5 h-5 border rounded-full text-sm p-1 m-1 inline-flex" onClick={() => {
                        if (page < 1) {
                            setPage(0)
                        } else { setPage(page - 1) }
                    }}> - </button>
                    <input className="w-10 h-8 rounded-lg mx-1 text-center"
                        name="pagesInput"
                        type="number"
                        placeholder="0"
                        value={page}
                        onChange={handlePageInput}
                        id="pagesInput"
                    />
                </label>
                <button className="text-custom-gray items-center justify-center w-5 h-5 border rounded-full text-sm p-1 m-1 inline-flex" onClick={() => setPage(page + 1)}> + </button>
            </div>

            <div className='langContainer flex flex-row items-center my-1'>
                <label className="flex flex-row items-center">
                    <div className="mx-2">
                        <ColorfulBtn onClick={openLang} />
                    </div>
                    <InfoModal isOpen={openInfoLang} onClose={closeLang} idNumber={2} />
                    <p className="text-white">Number of languages</p>
                    <button className="text-custom-gray items-center justify-center w-5 h-5 border rounded-full text-sm p-1 m-1 inline-flex" onClick={() => {
                        if (lang < 1) {
                            setLang(0)
                        } else { setLang(lang - 1) }
                    }}> - </button>
                    <input className="w-10 h-8 rounded-lg mx-1 text-center"
                        name="langInput"
                        type="number"
                        placeholder="0"
                        value={lang}
                        onChange={handleLangInput}
                        id="langInput"
                    />
                </label>
                <button className="text-custom-gray items-center justify-center w-5 h-5 border rounded-full text-sm p-1 m-1 inline-flex" onClick={() => setLang(lang + 1)}> + </button>
            </div>
        </div>
    )
};