import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Input from "../components/Input"

import { IoCalendarOutline } from "react-icons/io5";

import { vacinaData } from "../assets/data";
import { useEffect, useState } from "react";

function VacinaItem({text}){
  return (
    <div className="flex gap-x-1">
        <input type="checkbox" name="" id="" className=""/>
        <span>{text}</span>
    </div>
  )
}

function Forms() {

  const [vacinas, setVacinas] = useState(vacinaData.vacinas);
  
  const [selectedAvailability, setSelectedAvailability] = useState(2);

  function handleClickFilter(option) {
    setSelectedAvailability(option);
  }

  useEffect(() => {
    const saveVacinas = vacinaData.vacinas;

    if(selectedAvailability === 2){
      setVacinas(vacinaData.vacinas)
    } else {
      setVacinas(saveVacinas.filter((vacina) => (vacina.disponibilidade === selectedAvailability)))
    }
   }, [selectedAvailability])

  return (
    <>
      <Header />
      <div className="flex flex-col  min-h-[calc(100vh-150px-48px)] md:px-[30px] lg:px-[150px] xl:px-[280px] py-[15px] overflow-x-hidden overflow-y-hidden">
        
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-x-[40px] w-full h-auto">
          <div className="flex flex-col gap-y-2">
            <Input type={"text"} placeholder={"Insira seu nome"} className={'bg-transparent'} label={'Nome'}/>
            <Input type={"text"} placeholder={"__ / __ / ____"} className={'bg-transparent'} label={'Data nascimento'} id={'datepicker'}
                  icon={<IoCalendarOutline size={23} className="fill-mainPink text-mainPink icon-calendar"/>}/>
            <Input type={"text"} placeholder={"Insira seu CPF"} className={'bg-transparent'} label={'CPF'}/>
          </div>

          <div className="flex flex-col gap-y-2 mt-2 md:mt-0 ml-2 sm:ml-0">
            <Input type={"text"} placeholder={"Insira seu endereço"} className={'bg-transparent'} label={'Endereço'}/>
            <Dropdown />
          </div>
        </div>

        <div className="flex flex-col mt-7 w-fit px-7 md:px-0 md:w-[950px]">
            <div className="flex gap-x-2">
                <Button type={`${selectedAvailability === 1 ? 'filled' : 'default'}`} border={true} className={'text-[16px]'} 
                onClick={() => {handleClickFilter(1)}}>UBS</Button>
                <Button type={`${selectedAvailability === 0 ? 'filled' : 'default'}`} border={true} className={'text-[16px]'} 
                onClick={() => {handleClickFilter(0)}}>Particular</Button>
                <Button type={`${selectedAvailability === 2 ? 'filled' : 'default'}`} border={true} className={'text-[16px]'} 
                onClick={() => {handleClickFilter(2)}}>Todos</Button>
            </div>

            <span className="text-[15px] mt-2 mb-5 pr-16 md:pr-0">Preencha as vacinas que você tem certeza que já tomou, caso contrário, não é necessário.</span>

            <div className="flex flex-col items-center md:items-start lg:items-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-8 md:grid-rows-5 w-fit lg:w-full h-[200px] md:h-[300px] overflow-y-auto gap-y-16 md:gap-y-2 2xl:h-[350px]">
                  {
                    vacinas.map((vacina) => {
                      return(
                        <li className="min-w-[100px] max-w-[200px]" key={vacina.nome}>
                          <VacinaItem text={vacina.nome} />
                        </li>
                      )
                    })
                  }
                </ul>

            </div>
        </div>

        <div className="flex justify-center w-full">
          <Button type={'filled'} border={false} className="mt-4 text-[17px] lg:text-[19px]">Gerar carteirinha</Button>
        </div>
      </div>
      <Footer />
    </>
  )

  
}

export default Forms
