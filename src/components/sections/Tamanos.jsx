import IconoCaja from '../../assets/images/caja-de-pizza.png'
import IconoQueso from '../../assets/images/queso.png'
import IconoSalchicha from '../../assets/images/salchicha.png'

import { TAMANOS } from '../../data'
import styles from '../../styles/tamanos.module.css'
const Tamanos = () => {
  return (
    <section className="contenedor padding-25">
      <h2 className="uppercase text-center text-angy-texto-pri font-bold text-xl mb-6">Tamaños</h2>
      <div class={styles.contenedorCajas}>

        {TAMANOS.map(tamano => (
          <div key={tamano.id}>
            <img src={IconoCaja} alt={`pizza tamañano ${tamano.nombre}`} className='size-[60px] mx-auto' />
            <div className='text-center'>
              <h3 className='font-bold capitalize text-angy-texto-pri text-lg'>{tamano.nombre}</h3>
              <p className='font-medium text-angy-texto-sec'>{tamano.cantidad} Rebanadas</p>
              <p className='font-bold text-angy-texto-sec text-lg'>${tamano.precio}</p>
            </div>
          </div>
        ))}

        <div>
          <div>
            <img src={IconoQueso} alt='imagen de un queso' className='size-[23px]' />
            <h3 className='font-bold capitalize text-angy-texto-sec text-sm'>Queso Extra $15</h3>
          </div>
          <div>
            <img src={IconoSalchicha} alt='imagen de una salchicha' className='size-[23px]' />
            <h3 className='font-bold capitalize text-angy-texto-sec text-sm'>Ingrediente Extra $15</h3>
          </div>
        </div>


      </div>
    </section>
  )
}
export default Tamanos