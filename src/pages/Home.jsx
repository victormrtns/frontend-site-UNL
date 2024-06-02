import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InputNumber from "../components/InputNumber"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const navigate = useNavigate();

  function handleStartForms() {
    const age = document.getElementById('getAge');
    if(age.value != null && (age.value >= 20 && age.value <130)){
      localStorage.setItem('age', age.value);
      setTimeout(navigate, 0, "/forms");
    } else {
      toast.warn("Você precisa ter no mínimo 20 anos para participar do teste.", {
        position: "top-right"
      });
      age.focus()
    }
  }

  return (
    <div className="h-auto sm:h-screen w-full overflow-x-hidden">
      <Header />
      <div className="h-[calc(100vh-150px-48px)] sm:h-[calc(100vh-150px-48px)] flex flex-col items-center md:justify-center px-[28px] gap-y-8 lg:gap-y-10 xl:px-[362px] md:px-[150px] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-2 lg:mb-5">
          <div className="font-bold text-[25px] sm:text-[26px] md:text-[30px] lg:text-[35px] xl:text-[30px]">Bem vinda!</div>
          <div className="w-[250px] h-[6px] bg-mainPink rounded-full lg:w-[400px]"></div>
        </div>

        <div className="font-regular text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] 2xl:text-[22px] 3xl:text-[25px] text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
        Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Et netus et malesuada fames ac turpis egestas sed. 
        Facilisi cras fermentum odio eu feugiat pretium. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
        </div>

        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="mb-[5px] text-[16px] md:text-[19px]">Antes de começarmos, insira sua idade a seguir:</div>
          <InputNumber className="ml-4 lg:mt-0"></InputNumber>
        </div>
        
        <Button type={'filled'} className="mb-5 xl:mb-[30px] sm:mb-[60px] text-[19px] sm:text-[23px] lg:text-[22px]" border={false} 
        onClick={handleStartForms}>Iniciar Formulário</Button>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  )
}

export default Home