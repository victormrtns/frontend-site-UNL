function CarteirinhaHeader() {
    const name = localStorage.getItem('name')
    const age = localStorage.getItem('age')

    return (
        <div className="bg-carteiraHeader w-full h-[130px] rounded-3xl flex items-center justify-between px-28">
            <h1 className="text-white text-[40px] font-bold">Carteirinha de Vacinação</h1>
            
            <div className="flex flex-col text-white font-bold w-[330px] gap-y-5">
                <h3 className="flex gap-x-3 w-full">
                    Nome:
                    <span className="relative w-full h-5">
                        {name}
                        <div className="h-[2px] w-full bg-white absolute right-0 -bottom-1"></div>
                    </span>
                </h3>

                <h3 className="flex gap-x-3 w-full justify-center">
                    <h2>Idade:</h2>
                    <span className="relative w-full h-5">
                        {age}
                        <div className="h-[2px] w-12 bg-white absolute left-0 -bottom-1"></div>
                    </span>
                </h3>
            </div>
        </div>
    )
}

function VacinaTitle() {
    return (
        <div className="bg-carteiraVacinaName flex-1 h-[100px] text-white flex justify-center items-center">
            Nome
        </div>
    )
}

function VacinaDescription() {
    return (
        <div className="bg-carteiraVacinaDesc flex-1 h-[200px] text-[14px] text-white flex justify-center items-center">
            desc
        </div>
    )
}

function VacinaLotes() {
    return (
        <div className=""></div>
    )
}

const CarteirinhaVacinaPDF = () => {
    return ( 
        <div className="w-screen h-screen overflow-y-hidden p-3 flex flex-col gap-1">
            <CarteirinhaHeader />
            <div className="flex w-full gap-1">
                <VacinaTitle />
                <VacinaTitle />
                <VacinaTitle />
                <VacinaTitle />
                <VacinaTitle />
                <VacinaTitle />
            </div>

            <div className="flex w-full gap-1">
                <VacinaDescription />
                <VacinaDescription />
                <VacinaDescription />
                <VacinaDescription />
                <VacinaDescription />
                <VacinaDescription />
            </div>
        </div>
    );
}
 
export default CarteirinhaVacinaPDF;