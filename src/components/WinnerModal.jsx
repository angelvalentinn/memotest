
const WinnerModal = ({ reiniciar, timer, encontrados, dificultad }) => {
    if (encontrados.length != dificultad.length) return

    return (
        <section className="border bg-terciary h-64 w-64 flex flex-col items-center justify-evenly absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 rounded-md ">
            <h2 className="font-bold text-xl">¡ GANASTE !</h2>
            <p>En {timer} segundos</p>
            <button onClick={reiniciar} className="border rounded-lg py-2 px-10 hover:bg-secundary hover:text-terciary font-bold hover:transition-all hover:ease-in">Reiniciar</button>
        </section>
    )
}

export default WinnerModal