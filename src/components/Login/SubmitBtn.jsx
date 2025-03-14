
const SubmitBtn = ({ text, onClick }) => {
    return(
        <button onClick={onClick}
                className="flex mt-2 mb-2 bg-blue-700 text-white hover:bg-blue-900 py-2 px-3 rounded transition duration-300-ease transform hover:scale-102"
        >{text}<i className="ri-arrow-right-wide-fill text-white"></i>
        </button>

    )
}
export default SubmitBtn;

