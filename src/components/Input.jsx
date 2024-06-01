import 'flatpickr/dist/flatpickr.min.css';
import { useRef } from 'react';
import Flatpickr from 'react-flatpickr';

const Input = ({type, className, name, id, placeholder, label, icon}) => {
    
    const flatpickrRef = useRef(null);

    const handleToggle = () => {
        flatpickrRef.current.flatpickr.open();
    };

    return ( 
        <div className="flex flex-col">
            <label htmlFor={name} className="ml-[10px]">{label}</label>
            <div className={`flex w-[350px] h-10 px-[15px] ${className} justify-between items-center border-[2px] rounded-full border-gray-300 mt-[2px] relative`}>

                {
                    (id === 'datepicker') ?
                    <div className="flatpickr flex justify-between w-full">
                        <Flatpickr
                            ref={flatpickrRef}
                            className="w-56"
                            placeholder="__/__/____"
                            options={{
                                dateFormat: 'd/m/y'
                            }}
                        />
                        <button type="button" className="input-button ml-2 text-gray-500" title="toggle" onClick={handleToggle}>
                            {icon}
                        </button>
                    </div>
                    :
                    <input type={type} name={name} id={id} placeholder={placeholder} className={`bg-transparent w-full z-10`}/>
                }
                
            </div>
        </div>
     );
}
 
export default Input;