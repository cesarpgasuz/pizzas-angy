import { useMemo } from "react"
import Clock from "../icons/Clock"
import { HORARIOS } from "../../data"



const Horario = () => {

const fechaHoy = new Date().getDay()

const calcularDia = (dia) => {

  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ];
     return semana[dia]
}


const diaDeHoy = useMemo(() => calcularDia(fechaHoy), [fechaHoy])
const horarioHoy = HORARIOS[diaDeHoy]


  return (
    <div className="w-[270px] px-3 py-2 bg-angy-orange-light rounded-md mx-auto flex justify-center items-center gap-2">
        <Clock className='size-6' />
        <span className="font-semibold text-angy-texto-pri text-sm">{`${diaDeHoy}: ${horarioHoy}`}</span>
    </div>
  )
}
export default Horario