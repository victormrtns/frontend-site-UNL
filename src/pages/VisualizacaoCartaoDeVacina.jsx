import React, { useEffect, useState } from 'react';
import CartaoDeVacina from '../components/CartaoDeVacina';
import Button from '../components/Button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function VisualizacaoCartaoDeVacina() {
  const [vacinas, setVacinas] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
      var data = JSON.parse(localStorage.getItem("selectedItems"))
      setVacinas(data.vacinas?.map(vacina => ({
        nome: vacina.nome,
        resumo: vacina.descrição
      })))
  },[])

  function handleAddDateLote() {
    const divsLoteData = document.getElementsByName('divLoteData');
    let lotesByDiv = []
    let count = new Array(divsLoteData.length).fill(0)
    
    console.log(divsLoteData.length)

    divsLoteData.forEach((div, i) => {
        let vacinaContainer = div.childNodes
        let infoDivs = vacinaContainer[2].childNodes
        // let vacina_nome = vacinaContainer[0].firstChild.textContent

        let lote, data;

        infoDivs.forEach((infoDiv, j) => {
          lote = infoDiv.childNodes[0].childNodes[1].value
          data = infoDiv.childNodes[1].childNodes[1].value
  
          count[i] = (lote !== '' && data !== '') ? ++count[i] : count[i];

        })

        // TODO: gerar json dos dados extraidos acima, e colocar no local storage para serem utilizados na carteirinha
    })

    let validateData = true;

    for(let c of count){
      if(c === 0) { 
        validateData = false;
        toast.warn('Necessário que todas as vacinas tenham pelo menos um lote com sua respectiva data devidamente preenchidos.')
        break; 
      }
    }

    if(validateData === true) {
      toast.success('Carteirinha sendo gerada....') 
      setTimeout(navigate, 4000, "/carteirinhavacina");
    }
    
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="CartaoDeVacina h-[80%] max-h-[90vh] overflow-y-auto overflow-x-hidden">
        {(vacinas.length > 0) ? <CartaoDeVacina vacinas={vacinas} /> : ''}
      </div>

      <Button type={'filled'} className="mt-12 text-[17px] lg:text-[19px]" onClick={handleAddDateLote}>Continuar</Button>
    </div>
  );
}

export default VisualizacaoCartaoDeVacina;
