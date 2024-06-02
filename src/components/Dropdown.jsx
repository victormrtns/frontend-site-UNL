import { useEffect, useState } from "react";
import { data } from "../assets/data";

import { FaAngleDown } from "react-icons/fa6";

const Dropdown = () => {

    const [chosenState, setChosenState] = useState('');
    const [chosenCity, setChosenCity] = useState('');
    const [stateList, setStateList] = useState([{}]);
    const [cityList, setCityList] = useState([]);
    const [isOpenState, setIsOpenState] = useState(false);
    const [isOpenCity, setIsOpenCity] = useState(false);
    
    useEffect(() => {
        setStateList(data.estados.sort())
    }, [])

    function handleChangeState(item) {
        setIsOpenState(false)
        setChosenState(item);
        setCityList(item.cidades.sort());
    }

    return ( 
        <div className='flex sm:gap-x-10'>
            <div className="states">
                <label htmlFor="" className="ml-[10px]">Estado</label>
                <div className="flex w-[120px] h-10 px-[15px] justify-between items-center border-[2px] rounded-full border-gray-300 mt-[2px] relative" onClick={() => {setIsOpenState(!isOpenState)}}>
                    <span>{chosenState?.sigla}</span>
                    <button className="hover:bg-slate-200 rounded-full p-1 transition-all duration-300 ease-in-out">
                        <FaAngleDown />
                    </button>
                </div>

                <div className={`${(isOpenState) ? 'h-[180px] visible' : 'h-0 invisible'} w-[120px] transition-all duration-300 ease-in-out overflow-hidden flex justify-center items-center
                 absolute`}>
                    <ul className="border-2 border-[#b6b6b6] rounded-xl w-full max-h-[180px] overflow-y-auto">
                        {stateList.map((item) => {
                            return <li key={item.sigla} className="text-center border-b-[1px] border-[#b6b6b6] w-full hover:bg-slate-400 cursor-pointer bg-white"
                            onClick={() => {handleChangeState(item)}}>
                                <a className="w-full">{item.sigla}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>

            <div className="cities relative">
                <label htmlFor="" className="ml-[10px]">Cidade</label>
                <div className="flex min-w-[150px] w-fit h-10 px-[15px] justify-between items-center border-[2px] rounded-full border-gray-300 mt-[2px] relative" onClick={() => {setIsOpenCity(!isOpenCity)}}>
                    <span>{chosenCity}</span>
                    <button className="hover:bg-slate-200 rounded-full p-1 transition-all duration-300 ease-in-out">
                        <FaAngleDown />
                    </button>
                </div>

                <div className={`${(isOpenCity && cityList.length > 0) ? 'h-[180px] visible' : 'h-0 invisible'} w-[150px] transition-all duration-300 ease-in-out overflow-hidden flex justify-center items-center 
                absolute`}>
                    <ul className="border-2 border-[#b6b6b6] rounded-xl overflow-y-auto w-full max-h-[180px]">
                        {(cityList.length>0) ? 
                        cityList.map((item, i) => {
                            return <li key={i} className="text-center border-b-[1px] border-[#b6b6b6] w-full hover:bg-slate-400 bg-white cursor-pointer"
                            onClick={() => {setChosenCity(item); setIsOpenCity(false)}}>
                                <a className="w-full">{item}</a>
                            </li>
                        }) : 'Selecione Estado'}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Dropdown;