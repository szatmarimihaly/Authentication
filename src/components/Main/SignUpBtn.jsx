

const SignUpBtn = ({ text, onClick }) => {
    return (
        <div className="flex">
            <button className="flex items-center gap-2 gradient-border-button"
                    onClick={onClick}>{text}<i className="ri-arrow-right-s-line text-xl"></i>
            </button>

        </div>
    )
}
export default SignUpBtn;