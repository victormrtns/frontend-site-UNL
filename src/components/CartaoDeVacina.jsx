// src/CartaoDeVacina.jsx

import React, { useState } from 'react';

const CartaoDeVacina = ({ vacinas }) => {
  const [listVacinas,setlistVacinas] = useState({"items":[vacinas]});
  const info = [...Array(4)]
  
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {listVacinas.items[0]?.map((vacina, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4" name={'divLoteData'}>
            <div className="bg-pink-500 text-white font-bold text-center p-2 rounded-t-lg">
              {vacina.nome}
            </div>
            <div className="bg-pink-200 text-gray-700 py-2 px-4 h-[100px] md:h-[150px] text-[14px] text-justify overflow-y-auto">
              {vacina.resumo}
            </div>
            <div className="bg-gray-200 text-gray-700 p-2 rounded-b-lg">
              {info.map((_, i) => (
                <div key={i} className="flex justify-between mt-2">
                  <div className="flex-1 mr-1">
                    <label className="block text-xs">Lote:</label>
                    <input type="text" className="w-full px-2 py-1 border rounded min-w-[40px]" name={'loteVacina'}/>
                  </div>
                  <div className="flex-1 ml-1">
                    <label className="block text-xs">Data:</label>
                    <input type="date" className="w-full px-2 py-1 border rounded" name={'dataVacina'}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartaoDeVacina;
