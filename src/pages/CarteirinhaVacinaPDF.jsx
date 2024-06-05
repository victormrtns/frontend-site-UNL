import { useEffect, useState } from 'react'
import Button from '../components/Button'
import html2pdf from 'html2pdf.js'
import CarteirinhaNoResponsivePDF from './CarteirinhaNoResponsivePDF'

function CarteirinhaHeader() {
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')

    return (
        <div className="bg-carteiraHeader w-full h-[170px] sm:h-[130px] rounded-3xl flex flex-col py-2 sm:py-0 
        sm:flex-row items-center sm:justify-between px-14 lg:px-28">
            <h1 className="text-white text-[25px] sm:text-[29px] lg:text-[40px] font-bold">Carteirinha de Vacinação</h1>
            
            <div className="flex flex-col text-white font-bold w-[250px] sm:w-[330px] gap-y-5">
                <h3 className="flex gap-x-3 w-full">
                    Nome:
                    <span className="relative w-full h-5">
                        {name}
                        <div className="h-[2px] w-full bg-white absolute right-0 -bottom-3"></div>
                    </span>
                </h3>

                <h3 className="flex gap-x-3 w-full justify-center">
                    <h2>Idade:</h2>
                    <span className="relative w-full h-5">
                        {age}
                        <div className="h-[2px] w-12 bg-white absolute left-0 -bottom-3"></div>
                    </span>
                </h3>
            </div>
        </div>
    )
}

function VacinaTitle({children}) {
    return (
        <div className="bg-carteiraVacinaName h-[50px] text-white flex justify-center items-center">
            {children}
        </div>
    )
}

function VacinaDescription({children}) {
    return (
        <div className="bg-carteiraVacinaDesc h-[150px] text-[14px] text-white flex justify-center items-center px-3">
            {children}
        </div>
    )
}

const CarteirinhaVacinaPDF = () => {
    
    const [carteirinhaData,setCarteirinhaData] = useState([]); 

    useEffect(() => {
        setCarteirinhaData(JSON.parse(localStorage.getItem('dados_carteirinha')))
    }, [localStorage.getItem('dados_carteirinha')])

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
        <div className="max-w-screen h-fit overflow-x-auto overflow-y-hidden p-2 flex flex-col gap-1 items-center">
            <CarteirinhaHeader />

            <div className="w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-x-1 gap-y-2 overflow-x-auto overflow-y-hidden">
                
                {carteirinhaData?.map((vacina) => {
                    return (
                        <div className="flex flex-col h-full gap-y-1 w-full" key={vacina.descrição}>
                            <VacinaTitle>{vacina.nome}</VacinaTitle>
                            <VacinaDescription>{vacina.descrição}</VacinaDescription>
                            <div className="bg-cateiraVacinaLotes h-[400px] rounded-3xl flex flex-col p-3">
                                {
                                    vacina.dados?.map((dado) => {
                                        return (
                                            <div className="flex flex-col flex-1" key={`${dado.lote}${dado.data}`}>
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
            <Button type={'filled'} border={false} className="mt-12 text-[17px] lg:text-[19px] mb-5" onClick={generatePDF}>Baixar Carteirinha</Button>
        </div>

        <div className="hidden">
            <CarteirinhaNoResponsivePDF />
        </div>
        </>
    );
}
 
export default CarteirinhaVacinaPDF;