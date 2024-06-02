import { Link } from "react-router-dom";
const Button = ({ className,children,page,type,border,onClick}) => {
  return (
    <Link to={page}>
      <button className = {`flex justify-center align-center leading-none w-fit h-fit px-[10px] py-[10px] lg:px-[30px] lg:py-[15px] sm:px-[20px] rounded-full ${className} 
      ${(type === 'filled')?' bg-mainPink hover:bg-[#ce6fae]':'bg-white'}
      ${(border===true)?'border-2 border-[#B3B3B3]':''} transition-all duration-300 ease-in-out`} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
