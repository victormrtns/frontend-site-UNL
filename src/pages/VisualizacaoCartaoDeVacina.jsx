// src/App.js

import React from 'react';
import CartaoDeVacina from '../components/CartaoDeVacina';

const vacinas = [
  {
    nome: "Influenza (gripe)",
    resumo: "Dose única anual, preferencialmente com a vacina quadrivalente de alta concentração (high dose, HD4V). Em situações epidemiológicas de risco, considerar uma segunda dose a partir de três meses após a dose anual."
  },
  {
    nome: "Pneumocócicas conjugadas VPC13 ou VPC15 e polissacarídica VPP23",
    resumo: "Iniciar com uma dose da VPC13 ou VPC15 seguida de uma dose de VPP23 seis a 12 meses depois, e uma segunda dose de VPP23 cinco anos após a primeira."
  },
  {
    nome: "Herpes zóster",
    resumo: "Rotina a partir de 50 anos. Esquema: Vacina inativada (VZR) – duas doses com intervalo de dois meses (0-2). A vacinação está recomendada mesmo para aqueles que já desenvolveram a doença."
  },
  {
    nome: "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa ou dTpa-VIP",
    resumo: "Atualizar dTpa independente de intervalo prévio com dT ou TT. Com esquema de vacinação básico completo: reforço com dTpa a cada dez anos. Não vacinados e/ou histórico vacinal desconhecido: uma dose de dTpa e duas doses de dT no esquema 0-2-4 a 8 meses."
  },
  {
    nome: "Dupla adulto (difteria e tétano) – dT",
    resumo: "Com esquema de vacinação básico incompleto: uma dose de dTpa a qualquer momento e completar a vacinação básica com uma ou duas doses de dT de forma a totalizar três doses de vacina contendo o componente tetânico."
  },
  {
    nome: "Hepatite B",
    resumo: "Três doses, no esquema 0-1-6 meses."
  },
  {
    nome: "Febre amarela",
    resumo: "Para idosos não vacinados previamente. Recomendação PNI: Se aplicada a partir dos 5 anos de idade: dose única. A partir dos 60 anos, o serviço de saúde deverá avaliar a indicação. Recomendação SBIm: Duas doses, com intervalo de 10 anos."
  },
  {
    nome: "Vírus Sincicial Respiratório (Arexvy®)",
    resumo: "Uma dose, especialmente recomendada para idosos pertencentes a grupos de maior risco (cardiopata, pneumopata, diabético, nefropata e hepatopata)."
  },
  {
    nome: "Covid-19",
    resumo: "Acesse os dados atualizados sobre a disponibilidade de vacinas e os grupos contemplados pelo PNI em gov.br/saude/pt-br/assuntos/coronavirus"
  },
  {
    nome: "Hepatite A",
    resumo: "Duas doses, no esquema 0-6 meses. Na população com mais de 60 anos é incomum encontrar indivíduos suscetíveis."
  },
  {
    nome: "Hepatites A e B",
    resumo: "Três doses, no esquema 0-1-6 meses. A vacina combinada para as hepatites A e B é uma opção e pode substituir a vacinação isolada para as hepatites A e B."
  },
  {
    nome: "Meningocócicas conjugadas ACWY ou C",
    resumo: "Uma dose. A indicação da vacina, assim como a necessidade de reforços, dependerão da situação epidemiológica."
  },
  {
    nome: "Tríplice viral (sarampo, caxumba e rubéola)",
    resumo: "Uma dose. A indicação da vacina dependerá de risco epidemiológico e da situação individual de suscetibilidade."
  }
];

function VisualizacaoCartaoDeVacina() {
  return (
    <div className="CartaoDeVacina">
      <CartaoDeVacina vacinas={vacinas} />
    </div>
  );
}

export default VisualizacaoCartaoDeVacina;
