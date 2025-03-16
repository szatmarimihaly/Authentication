
const LoginBtn = ({ text, onClick}) => {
    return (
        <button
            className = "gradient-button"
                onClick={onClick}>{ text }
        </button>
    )
}
export default LoginBtn;


