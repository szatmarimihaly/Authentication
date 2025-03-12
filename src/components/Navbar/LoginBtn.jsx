
const LoginBtn = ({ text, onClick}) => {
    return (
        <button
            className = "text-lg font-thin rounded bg-blue-700 py-1 px-10 text-white hover:bg-blue-900
            transition duration-300 ease transform hover:scale-105"
                onClick={onClick}>{ text }</button>
    )
}
export default LoginBtn;


