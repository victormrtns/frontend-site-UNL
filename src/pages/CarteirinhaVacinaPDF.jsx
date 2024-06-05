import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

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
    }, [])

    const divToPrintRef = useRef();

    const generatePDF = async () => {
        const element = divToPrintRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('CarteirinhaVacina.pdf');
    };

    return ( 
        <>
        <div className="max-w-screen h-fit overflow-x-auto overflow-y-hidden p-2 flex flex-col gap-1 items-center" ref={divToPrintRef} id="divToPrint">
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
        </>
    );
}
 
export default CarteirinhaVacinaPDF;