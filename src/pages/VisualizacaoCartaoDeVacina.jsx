import React, { useEffect, useState } from 'react';
import CartaoDeVacina from '../components/CartaoDeVacina';

function VisualizacaoCartaoDeVacina() {
  const [vacinas, setVacinas] = useState({});
  useEffect(() => {
      console.log("goz")
      var data = JSON.parse(localStorage.getItem("selectedItems"))
      console.log(data)
      setVacinas(data.vacinas?.map(vacina => ({
        nome: vacina.nome,
        resumo: vacina.descrição
      })))
  },[])
  return (
    <div className="CartaoDeVacina">
      <CartaoDeVacina vacinas={vacinas} />
    </div>
  );
}

export default VisualizacaoCartaoDeVacina;
