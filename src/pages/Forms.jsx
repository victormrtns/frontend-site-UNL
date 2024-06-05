import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Input from "../components/Input"

import { IoCalendarOutline } from "react-icons/io5";

import { vacinaData, vacinaDataIdoso } from "../assets/data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Forms() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [age, setAge] = useState(Number.parseInt(localStorage.getItem('age')))

  const [vacinas, setVacinas] = useState((age < 50) ? vacinaData.vacinas : vacinaDataIdoso.vacinas);
  
  const [selectedAvailability, setSelectedAvailability] = useState(2);

  function handleClickFilter(option) {
    setSelectedAvailability(option);
  }

  function handleFilterBySelection() {
    const selectedItemsInput = document.getElementsByClassName('checkboxVacina');
    const name = document.getElementById('inputName').value;
    let selectedItemsJSON = {
      "vacinas": []
    }

    for(let item of selectedItemsInput){
      if(item.checked == true){
        selectedItemsJSON.vacinas.push(vacinas.find((vacina) => vacina.nome === item.value))
      }
    }

    if(name.length > 0){
      localStorage.setItem("name", name);
      localStorage.setItem("selectedItems", JSON.stringify(selectedItemsJSON))
      setTimeout(navigate, 0, "/cartaodevacina");
    }

  }

  useEffect(() => {
    const saveVacinas = (age < 50) ? vacinaData.vacinas : vacinaDataIdoso.vacinas;

    if(selectedAvailability === 2){
      setVacinas((age < 50) ? vacinaData.vacinas : vacinaDataIdoso.vacinas)
    } else {
      setVacinas(saveVacinas.filter((vacina) => (vacina.disponibilidade === selectedAvailability)))
    }
   }, [selectedAvailability, age])

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-150px-48px)] md:px-[30px] lg:px-[150px] xl:px-[280px] py-[15px] overflow-x-hidden overflow-y-hidden">
        
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-x-[40px] w-full h-auto">
          <div className="flex flex-col gap-y-2">
            <Input type={"text"} placeholder={"Insira seu nome"} className={'bg-transparent'} label={'Nome'} id={"inputName"}/>
            <Input type={"text"} placeholder={"__ / __ / ____"} className={'bg-transparent'} label={'Data nascimento'} id={'datepicker'}
                  icon={<IoCalendarOutline size={23} className="fill-mainPink text-mainPink icon-calendar"/>}/>
            <Input type={"text"} placeholder={"Insira seu CPF"} className={'bg-transparent'} label={'CPF'}/>
          </div>

          <div className="flex flex-col gap-y-2 mt-2 md:mt-0 ml-2 sm:ml-0">
            <Input type={"text"} placeholder={"Insira seu endereço"} className={'bg-transparent'} label={'Endereço'}/>
            <Dropdown />
          </div>
        </div>

        <div className="flex flex-col mt-7 w-fit lg:w-[950px] px-7 md:px-0 ">
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
                <ul className={`grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-x-8 items-center grid-rows-[repeat(auto-fill,_minmax(50px,_1fr))] w-full gap-y-8`}>
                  {
                    vacinas.map((vacina) => {
                      return(
                        <li className="min-w-[100px] max-w-[200px]" key={vacina.nome}>
                          <div className="flex gap-x-1 items-center">
                              <input type="checkbox" className="checkboxVacina" value={vacina.nome}/>
                              <span>{vacina.nome}</span>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>

            </div>
        </div>

        <div className="flex justify-center w-full">
          <Button type={'filled'} border={false} className="mt-12 text-[17px] lg:text-[19px]" onClick={handleFilterBySelection}>Gerar carteirinha</Button>
        </div>
      </div>
      <Footer />
    </>
  )

  
}

export default Forms
