import { useState } from "react";
import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg";

import "./timer.scss";
let mils = 0;
let sec = 0;
let min = 0;
let Horas = 0
let timer;

const Timer = () => {
  const [values, setValues] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [milis, setMilis] = useState(0);
  const [horas, setHoras] = useState(0);
  const [image, setImage] = useState(0);

  const start = () => {
    setImage(1);
    timer = setInterval(watch, 10);
  };
  const pause = () => {
    clearInterval(timer);
    setImage(0);
  };
  const stop = () => {
    pause();
    reset();
  };

  const reset = () => {
    setValues(parseInt(0));
    setMinutes(parseInt(0));
    setMilis(parseInt(0));
    mils = 0;
    sec = 0;
    min = 0;
    Horas = 0
  };
  const watch = () => {
    mils++;
    if (mils === 100) {
      sec++;
      mils = 0;
      if (sec === 60) {
        min++;
        sec = 0;
        if(min === 60){
          Horas++
          min = 0
        }
      }
    }
    setValues(parseInt(`${sec < 10 ? 0 : ""}${sec}`));
    setMinutes(parseInt(`${min < 10 ? 0 : ""}${min}`));
    setMilis(parseInt(`${mils < 10 ? 0 : ""}${mils}`));
    setHoras(parseInt(`${Horas < 10 ? 0 : ""}${Horas}`));
  };

  return (
    <div className="timer">
      <span>
        {" "}
        {image === 1 ? <CgPlayPauseO /> : <CgPlayButtonO />}
        { horas+ ":" + minutes + ":" + values + ":" + milis}
      </span>
      <div>
        <button onClick={start}>Iniciar</button>
        <button onClick={pause}>Pausar</button>
        <button onClick={stop}>Parar</button>
        <button onClick={reset}>Zerar</button>
      </div>
    </div>
  );
};

export default Timer;
