

const SignUpBtn = ({ text, onClick }) => {
    return (
        <div className="flex">
            <button className="flex text-lg border-solid border-2 border-black items-center gap-1 font-thin rounded-xl bg-transparent p-2 text-black hover:bg-black
            transition duration-300 ease hover:text-white hover:border hover:border-solid hover:border-2 hover:border-black"
                    onClick={onClick}>{text}<i className="ri-arrow-right-s-line text-xl"></i>
            </button>

        </div>
    )
}
export default SignUpBtn;