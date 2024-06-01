import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {

  return (
    <>
      <Header />
      <div className="h-[calc(100vh-150px-48px)] flex flex-col items-center justify-center px-[28px] gap-y-16">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[30px]">Bem vinda!</div>
        <div className="w-[250px] h-[6px] bg-mainPink rounded-full"></div>
      </div>
      <div className="font-regular text-[17px] text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
      Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Et netus et malesuada fames ac turpis egestas sed. 
      Facilisi cras fermentum odio eu feugiat pretium. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
      </div>

      <Button page = {'/'} type={'filled'} border={false}>Iniciar Formulário</Button>
      </div>
      <Footer />
    </>
  )
}

export default App
