import { IMAGES_DIFICIL, IMAGES_FACIL, IMAGES_MEDIO } from "../utils/constantes"

const Header = ({setDificultad,reiniciar}) => {
  return (
    <header className="font-bold text-3xl uppercase font-mono pt-2">
        <h1>* Juego de Memoria *</h1>
        <ul className="flex text-xl justify-between pt-4">
          <li onClick={ () => {setDificultad(IMAGES_FACIL) } } onMouseUp={reiniciar} className="cursor-pointer hover:underline font-thin">Fácil</li>
          <li onClick={ () => {setDificultad(IMAGES_MEDIO) } } onMouseUp={reiniciar} className="cursor-pointer hover:underline font-thin">Medio</li>
          <li onClick={ () => {setDificultad(IMAGES_DIFICIL) } } onMouseUp={reiniciar} className="cursor-pointer hover:underline font-thin">Dificil</li>
        </ul>
    </header>
  )
}

export default Header