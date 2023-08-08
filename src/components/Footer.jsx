const Footer = ({ win, classBtn, timer, setJugar, dificultad}) => {
    return (
        <footer className={`flex gap-40 items-center pb-2 ${win ? 'blur-sm' : ''}`}>
            <button onClick={() => (!win && dificultad != []) && setJugar(true)} className={`border ${classBtn} rounded-lg py-2 px-10 hover:bg-secundary hover:text-terciary font-bold hover:transition-all hover:ease-in`}>Jugar</button>
            <p>Tiempo: {timer} segundos</p>
        </footer>
    )
}

export default Footer