
const WhatBtn = ({ text, onClick }) => {
    return (
        <div className="flex">
            <button className="flex text-lg border-solid border-2 border-black items-center gap-1 font-thin rounded-xl bg-black p-2 text-white hover:bg-transparent
            transition duration-300 ease hover:text-black hover:border hover:border-solid hover:border-2 hover:border-black"
                    onClick={onClick}>{text}<i className="ri-arrow-right-s-line text-xl"></i>
            </button>

        </div>
    )
}
export default WhatBtn;


