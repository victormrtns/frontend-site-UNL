import FaculdadeLogo from '../assets/logoFaculdade.png?react'

const Header = () => {
    return ( 
        <div className="w-full h-[150px] px-28 flex items-center bg-mainPink">
            <img src={FaculdadeLogo} alt="Universidade Nilton Lins" width={270}/>
        </div>
     );
}
 
export default Header;