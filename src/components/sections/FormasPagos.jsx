import IconoBilletes from '../../assets/images/dolares.png'
import IconoTarjeta from '../../assets/images/tarjeta-de-credito.png'
const FormasPagos = () => {
  return (
    <section className="contenedor padding-25">
            <h2 className="uppercase text-center text-angy-texto-pri font-bold text-xl mb-3">formas de pago</h2>
            <p className="text-center font-medium text-angy-texto-sec text-xs mb-6">Contamos con  diferentes formas de pago</p>

            <div className="grid grid-cols-2">
              <div className='flex flex-col justify-center items-center'><img src={IconoBilletes} alt='imagen de unos billetes' className='size-12' />
                <h3 className='text-xs font-bold text-angy-texto-sec'>Pago en Efectivo</h3>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img src={IconoTarjeta} alt='imagen de una tarjeta de credio' className='size-12' />
                <h3 className='text-xs font-bold text-angy-texto-sec'>Pago con Tarjeta</h3>
              </div>
            </div>
   
    </section>
  )
}
export default FormasPagos