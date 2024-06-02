import React, { useEffect } from 'react';
import CartaoDeVacina from '../components/CartaoDeVacina';
var data = JSON.parse(localStorage.getItem("selectedItems"))
const transformData = () => {
  return data.map(vacina => ({
    nome: vacina.nome,
    resumo: vacina.descrição
  }));
};

const vacinas = transformData();

function VisualizacaoCartaoDeVacina() {
  return (
    <div className="CartaoDeVacina">
      <CartaoDeVacina vacinas={vacinas} />
    </div>
  );
}

export default VisualizacaoCartaoDeVacina;
