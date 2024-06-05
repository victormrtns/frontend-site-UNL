import { useEffect, useState } from 'react'
import Button from '../components/Button'

import html2pdf from 'html2pdf.js'

function CarteirinhaHeader() {
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')

    return (
        <div className="bg-carteiraHeader w-full h-[170px] rounded-3xl flex flex-row py-2 items-center justify-between px-28">
            <h1 className="text-white text-[60px] font-bold">Carteirinha de Vacinação</h1>
            
            <div className="flex flex-col text-[30px] text-white font-bold w-[250px] sm:w-[330px] gap-y-5">
                <h3 className="flex gap-x-3 w-full">
                    Nome:
                    <span className="relative w-full h-5">
                        {name}
                    </span>
                </h3>

                <h3 className="flex gap-x-3 w-full justify-center">
                    <h2>Idade:</h2>
                    <span className="relative w-full h-5">
                        {age}
                    </span>
                </h3>
            </div>
        </div>
    )
}

function VacinaTitle({children}) {
    return (
        <div className="bg-carteiraVacinaName h-[250px] w-full text-[27px] text-white flex justify-center items-center">
            {children}
        </div>
    )
}

function VacinaDescription({children}) {
    return (
        <div className="bg-carteiraVacinaDesc h-[400px] w-full text-[23px] text-white flex justify-center items-center text-pretty px-6">
            {children}
        </div>
    )
}

const CarteirinhaNoResponsivePDF = () => {
    
    const [carteirinhaData,setCarteirinhaData] = useState([]); 

    useEffect(() => {
        setCarteirinhaData(JSON.parse(localStorage.getItem('dados_carteirinha')))
    }, [])

    function generatePDF() {
        const content = document.getElementById('divToPdf');

        const options = {
            margin: [10, 10, 10, 10],
            filename: "carteirinha.pdf",
            html2canvas: {scale: 2},
            jsPDF: {unit: "mm", format: "a1", orientation: "landscape"}
        }

        html2pdf().set(options).from(content).save();

    }

    return ( 
        <>
        <div id="divToPdf" className="w-[3100px] h-[2100px] overflow-x-hidden overflow-y-hidden p-2 flex flex-col gap-1 items-center">
            <CarteirinhaHeader />

            <div className="w-full h-full grid grid-rows-3 grid-cols-5 gap-x-1 gap-y-2 overflow-x-hidden">
                
                {carteirinhaData?.map((vacina) => {
                    return (
                        <div className="flex flex-col h-[630px] gap-y-1 w-full" key={vacina.descrição}>
                            <VacinaTitle>{vacina.nome}</VacinaTitle>
                            <VacinaDescription>{vacina.descrição}</VacinaDescription>
                            <div className="bg-cateiraVacinaLotes h-[800px] w-full rounded-3xl flex flex-col p-3">
                                {
                                    vacina.dados?.map((dado) => {
                                        return (
                                            <div className="flex flex-col flex-1 text-[20px]" key={`${dado.lote}${dado.data}`}>
                                                <span><b>Lote:</b> {dado.lote}</span>
                                                <span><b>Data:</b> {dado.data}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
        <div className="flex justify-center items-center">
            <Button type={'filled'} border={false} className="text-[17px] lg:text-[19px]" onClick={generatePDF}>Baixar Carteirinha</Button>
        </div>
        </>
    );
}
 
export default CarteirinhaNoResponsivePDF;