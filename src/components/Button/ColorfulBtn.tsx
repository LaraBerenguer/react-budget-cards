interface ColorfulBtnProps {
    onClick: () => void;
}

export default function ColorfulBtn({ onClick }: ColorfulBtnProps) {
    return (
        <div className="flex items-center">
            <button onClick={onClick} className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-custom-purple rounded-full focus:shadow-outline hover:bg-dark-purple">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-current">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
        </div>
    )
}

