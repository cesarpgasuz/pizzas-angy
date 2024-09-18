import { INFONEGOCIO } from "../../data"
import ImagenNegocio from '../../assets/images/local.jpg'

const Direccion = () => {
  return (
    <section className="contenedor padding-25">
      <h2 className="uppercase text-center text-angy-texto-pri font-bold text-xl mb-3">Dirección</h2>
      <p className="text-center font-medium text-angy-texto-sec text-sm mb-6">{INFONEGOCIO.direccion}</p>
      <img src={ImagenNegocio} alt='imagen de una pizzeria' className="w-full h-auto" />
    </section>
  )
}
export default Direccion