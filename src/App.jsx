import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InputNumber from "./components/InputNumber"
function App() {

  return (
    <>
      <Header />
      <div className="h-screen md:h-[calc(100vh-150px-48px)] flex flex-col items-center md:justify-center px-[28px] gap-y-8 md:gap-y-16 xl:px-[362px] md:px-[150px]">
      <div className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-4 xl:pt-[30px]">
        <div className="font-bold text-[25px] sm:text-[26px] md:text-[30px] lg:text-[35px] xl:text-[30px]">Bem vinda!</div>
        <div className="w-[250px] h-[6px] bg-mainPink rounded-full lg:w-[400px]"></div>
      </div>
      <div className="font-regular text-[17px] sm:text-[17px] md:text-[19px] lg:text-[20px] 2xl:text-[25px] text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
      Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Et netus et malesuada fames ac turpis egestas sed. 
      Facilisi cras fermentum odio eu feugiat pretium. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="mb-[5px]">Antes de começarmos, insira sua idade a seguir:</div>
        <InputNumber className="ml-4 lg:mt-0"></InputNumber>
      </div>
      <Button page = {'/'} type={'filled'} className="mb-5 xl:mb-[30px] sm:mb-[60px]" border={false}>Iniciar Formulário</Button>

      </div>
      <Footer />
    </>
  )
}

export default App
