import { Link } from "react-router-dom";
const Button = ({ className,children,page,type,border, onClick}) => {
  return (
    <Link to = {page}>
      <button className = {`flex justify-center align-center leading-none w-[300px] h-[48px] px-[10px] py-[10px] rounded-full ${className} ${(type === 'filled')?' bg-mainPink':'bg-white'}
      ${(border===true)?'border-2 border-[#B3B3B3]':''}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
