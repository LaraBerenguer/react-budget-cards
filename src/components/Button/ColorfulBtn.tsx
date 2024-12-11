interface ColorfulBtnProps {
    onClick: () => void;
}

export default function ColorfulBtn({ onClick }: ColorfulBtnProps) {
    return (
        <div>
            <button onClick={onClick} className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-custom-purple rounded-full focus:shadow-outline hover:bg-dark-purple">
                <svg className="w-2 h-2 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </button>
        </div>

    )
}