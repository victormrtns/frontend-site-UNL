import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function CarteirinhaHeader() {
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')

    return (
        <div className="bg-carteiraHeader w-[1920px] h-[170px] rounded-3xl flex flex-row py-2 items-center justify-between px-28">
            <h1 className="text-white text-[60px] font-bold mb-8">Carteirinha de Vacinação</h1>
            
            <div className="flex flex-col text-[30px] text-white font-bold w-[250px] sm:w-[330px] gap-y-5 mb-6">
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
        <div className="bg-carteiraVacinaName h-[150px] w-[310px] text-[23px] text-white flex justify-center items-center">
            {children}
        </div>
    )
}

function VacinaDescription({children}) {
    return (
        <div className="bg-carteiraVacinaDesc h-[400px] w-[310px] text-[18px] text-white flex justify-center items-center px-3">
            {children}
        </div>
    )
}

const CarteirinhaNoResponsivePDF = () => {
    
    const [carteirinhaData,setCarteirinhaData] = useState([]); 

    useEffect(() => {
        setCarteirinhaData(JSON.parse(localStorage.getItem('dados_carteirinha')))
    }, [])

    const pdfRef = useRef();

    const generatePDF = async () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
  });
    };

    return ( 
        <>
        <div id="capture" ref={pdfRef} className="w-[1920px] h-[1600px] overflow-x-hidden overflow-y-hidden p-2 flex flex-col gap-1 items-center">
            <CarteirinhaHeader />

            <div className="w-[1920px] h-[1250px] grid grid-rows-3 grid-cols-6 gap-x-1 gap-y-2 overflow-x-hidden">
                
                {carteirinhaData?.map((vacina) => {
                    return (
                        <div className="flex flex-col h-[400px] gap-y-1 w-full" key={vacina.descrição}>
                            <VacinaTitle>{vacina.nome}</VacinaTitle>
                            <VacinaDescription>{vacina.descrição}</VacinaDescription>
                            <div className="bg-cateiraVacinaLotes h-[800px] w-[310px] rounded-3xl flex flex-col p-3">
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
            <Button type={'filled'} border={false} className="text-[17px] lg:text-[19px]" onClick={generatePDF}>Baixar Carteirinha</Button>
        </div>
        </>
    );
}
 
export default CarteirinhaNoResponsivePDF;