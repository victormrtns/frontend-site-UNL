import React from 'react';
import { Link } from "react-router-dom";
const Button = ({ className,children,page,type,border}) => {
  return (
    <Link to = {page}>
      <button className = {`flex justify-center align-center leading-none w-fit h-fit px-[10px] py-[10px] text-[19px] lg:px-[30px] lg:py-[15px] lg:text-[22px] sm:px-[5px] sm:text-[23px] rounded-full ${className} ${(type === 'filled')?' bg-mainPink':'bg-white'}
      ${(border===true)?'border-2 border-[#B3B3B3]':''}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
