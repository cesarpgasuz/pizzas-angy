import Clock from "../icons/Clock"
const Horario = () => {
  return (
    <div className="w-[270px] px-3 py-2 bg-angy-orange-light rounded-md mx-auto flex justify-center items-center gap-2">
        <Clock className='size-6' />
        <span className="font-semibold text-angy-texto-pri text-sm">Miercoles: 3:00 am - 10:00 pm</span>
    </div>
  )
}
export default Horario