
const WhatBtn = ({ text, onClick }) => {
    return (
        <div className="flex">
            <button className="flex items-center gradient-what text-white"
                    onClick={onClick}>{text}<i className="ri-arrow-right-s-line text-xl"></i>
            </button>

        </div>
    )
}
export default WhatBtn;


