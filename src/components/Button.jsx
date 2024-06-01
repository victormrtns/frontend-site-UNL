import React from 'react';
import { Link } from "react-router-dom";
const Button = ({ className,children,page,type,border}) => {
  return (
    <Link to = {page}>
      <button className = {`flex justify-center align-center leading-none w-[300px] h-[48px] px-[10px] py-[10px] text-[28px] rounded-full ${className} ${(type === 'filled')?' bg-mainPink':'bg-white'}
      ${(border===true)?'border-2 border-[#B3B3B3]':''}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
