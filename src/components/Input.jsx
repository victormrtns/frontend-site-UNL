const Input = ({type, className, name, id, placeholder, label}) => {
    
    return ( 
        <div className="flex flex-col">
            <label htmlFor={name} className="ml-[10px]">{label}</label>
            <div className={`flex w-[250px] sm:w-[350px] h-10 px-[15px] ${className} justify-between items-center border-[2px] rounded-full border-gray-300 mt-[2px] relative`}>
                <input type={type} name={name} id={id} placeholder={placeholder} className={`bg-transparent w-full z-10`}/>
            </div>
        </div>
     );
}
 
export default Input;