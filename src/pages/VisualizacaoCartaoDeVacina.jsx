import React, { useEffect, useState } from 'react';
import CartaoDeVacina from '../components/CartaoDeVacina';

function VisualizacaoCartaoDeVacina() {
  const [vacinas, setVacinas] = useState({});
  useEffect(() => {
      var data = JSON.parse(localStorage.getItem("selectedItems"))
      setVacinas(data.vacinas?.map(vacina => ({
        nome: vacina.nome,
        resumo: vacina.descrição
      })))
  },[])
  return (
    <div className="CartaoDeVacina">
      {(vacinas.length > 0) ? <CartaoDeVacina vacinas={vacinas} /> : ''}
    </div>
  );
}

export default VisualizacaoCartaoDeVacina;
