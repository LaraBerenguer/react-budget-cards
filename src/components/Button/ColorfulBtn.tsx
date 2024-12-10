interface ColorfulBtnProps {
    onClick: () => void;
}

export default function ColorfulBtn({ onClick }: ColorfulBtnProps) {
    return (
        <div>
            <button onClick={onClick} className="relative size-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-sm text-white rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-custom-purple dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                i
            </span>
        </button>
        </div>

    )
}