import { useState } from 'react';

const InputNumber = ({className}) => {
  const [valor, setValor] = useState('');

  const handleChange = (e) => {
    const novoValor = e.target.value;

    // Verifica se o novo valor é um número inteiro
    if (/^\d*$/.test(novoValor)) {
      setValor(novoValor);
    }
  };

  return (
    <input
      type="text"
      value={valor}
      onChange={handleChange}
      placeholder="Ex: 36"
      className={`text-pink-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-pink-400 border-b-2 border-pink-200 border-l-0 border-r-0 border-t-0 rounded-md py-2 px-4 ${className}`}
    />
  );
};

export default InputNumber;
