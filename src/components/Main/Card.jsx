const Card = ({ title, text, icon }) => {

    return (
        <div className = "flex flex-col items-center gap-4 bg-custom-purple text-white p-4 border-4 border-transparent hover:border-purple-800 hover:transform hover:scale-105 transition-transform duration-300">
            {icon}
            <div className = "flex flex-col items-center gap-4">
                <h3 className = "text-2xl mt-10 text-center card-gradient-text">{title}</h3>
                <div class="border-t border-purple-800 mt-3 mb-3 w-[80%]"></div>
                <p className = "text-lg text-center mr-4 ml-4">{text}</p>
            </div>
        </div>
    );

}
export default Card;
