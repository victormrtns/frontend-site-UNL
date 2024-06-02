// src/CartaoDeVacina.jsx

import React from 'react';

const CartaoDeVacina = ({ vacinas }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vacinas.map((vacina, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <div className="bg-pink-500 text-white font-bold text-center p-2 rounded-t-lg">
              {vacina.nome}
            </div>
            <div className="bg-pink-200 text-gray-700 p-2">
              {vacina.resumo}
            </div>
            <div className="bg-gray-200 text-gray-700 p-2 rounded-b-lg">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-between mt-2">
                  <div className="flex-1 mr-1">
                    <label className="block text-xs">Lote:</label>
                    <input type="text" className="w-full px-2 py-1 border rounded" />
                  </div>
                  <div className="flex-1 ml-1">
                    <label className="block text-xs">Data:</label>
                    <input type="date" className="w-full px-2 py-1 border rounded" />
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
