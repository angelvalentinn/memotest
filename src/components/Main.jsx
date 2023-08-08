import { IMAGES } from "../utils/constantes";

const Main = ({ win, seleccionados, setSeleccionados, jugar, encontrados }) => {
    return (
        <main className={`grid grid-cols-5 gap-3 ${win ? 'blur-sm' : ''}`}>
            {IMAGES.map((IMG, i) => {
                const [, URL] = IMG.split("|");

                return (
                    encontrados.includes(IMG) || seleccionados.includes(IMG) ?
                        <button
                            key={i}
                            className="border rounded-lg select-none border-secundary h-20 w-20 grid place-items-center"
                        >
                            <img src={URL} alt="icon" />
                        </button>
                        :
                        <button /* Pasando como parametro seleccionados, paso la version previa de seleccionados. Asi me aseguro que este con la version mas reciente de encontrados */
                            onClick={() => (seleccionados.length < 2 && jugar) && setSeleccionados((seleccionados) => seleccionados.concat(IMG))}
                            key={i}
                            className="border rounded-lg select-none border-secundary h-20 w-20 grid place-items-center"
                        >
                            <img src="https://icongr.am/octicons/search.svg?size=69&color=currentColor" alt="icon" />
                        </button>
                );
            })}
        </main>
    )
}

export default Main