import FaculdadeLogo from '../assets/logoFaculdade.png?react'

const Header = () => {
    return ( 
        <div className="w-full h-[150px] px-6 md:px-28 flex items-center justify-center sm:justify-start bg-mainPink">
            <img src={FaculdadeLogo} alt="Universidade Nilton Lins" className="w-[160px] sm:w-[270px]" />
        </div>
     );
}
 
export default Header;