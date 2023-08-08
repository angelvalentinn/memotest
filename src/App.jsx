import { useEffect, useState } from "react";
import { IMAGES_DIFICIL, IMAGES_FACIL, IMAGES_MEDIO } from "./utils/constantes";
import Header from "./components/Header";
import "./index.css";
import WinnerModal from "./components/WinnerModal";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [encontrados, setEncontrados] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [jugar, setJugar] = useState(false);
  const [timer, setTimer] = useState(0);
  const [win, setWin] = useState(false);
  const [dificultad, setDificultad] = useState(IMAGES_FACIL);

  const classBtn = jugar ? "hidden" : "";

  useEffect(() => {
    if (seleccionados.length == 2) {
      if (seleccionados[0].split("|")[1] == seleccionados[1].split("|")[1]) {
        setEncontrados((encontrados) => encontrados.concat(seleccionados));
        setSeleccionados([]);
        return;
      }
      setTimeout(() => setSeleccionados([]), 800);
    }
  }, [seleccionados]);

  useEffect(() => {
    if (encontrados.length == dificultad.length) {
      setWin(true);
      setJugar(false);
    }
  }, [encontrados]);

  useEffect(() => {
    if (jugar) {
      const intervalo = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      return () => clearInterval(intervalo);
    }
  }, [jugar]);

  const reiniciar = () => {
    setTimer(0);
    setEncontrados([]);
    setSeleccionados([]);
    setJugar(false)
    setWin(false);
}

  return (
    <div className=" bg-terciary text-secundary h-screen flex  flex-col items-center gap-3 ">
      <Header setDificultad={setDificultad} reiniciar={reiniciar} />

      <Main
        win={win}
        seleccionados={seleccionados}
        setSeleccionados={setSeleccionados}
        jugar={jugar}
        encontrados={encontrados}
        dificultad={dificultad}
      />
      
      <WinnerModal reiniciar={reiniciar} timer={timer} encontrados={encontrados} dificultad={dificultad} />

      <Footer win={win} classBtn={classBtn} timer={timer} setJugar={setJugar} dificultad={dificultad} />
    </div>
  );
}

export default App;
