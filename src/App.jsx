import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Input from "./components/Input"

import { IoCalendarOutline } from "react-icons/io5";

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row md:gap-x-[40px] items-center md:items-start h-[calc(100vh-150px-48px)] w-screen md:px-[362px] py-[22px] overflow-y-hidden">
        <div className="flex flex-col gap-y-[8px]">
          <Input type={"text"} placeholder={"Insira seu nome"} className={'bg-transparent'} label={'Nome'}/>
          <Input type={"text"} placeholder={"__ / __ / ____"} className={'bg-transparent'} label={'Data nascimento'} id={'datepicker'}
                icon={<IoCalendarOutline size={23} className="fill-mainPink text-mainPink icon-calendar"/>}/>
          <Input type={"text"} placeholder={"Insira seu CPF"} className={'bg-transparent'} label={'CPF'}/>
        </div>

        <div className="flex flex-col gap-y-[8px]">
          <Input type={"text"} placeholder={"Insira seu endereço"} className={'bg-transparent'} label={'Endereço'}/>
          <Dropdown />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
