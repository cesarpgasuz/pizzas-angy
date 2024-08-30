import Horario from '../elements/Horario'
import ImagenPizza from '../../assets/images/pizza.png'
import styles from '../../styles/header.module.css'


const Header = () => {
  return (
    <header className='w-full h-auto overflow-hidden'>

      <section className='contenedor relative py-8'>
        <div className={`${styles.circleHeader} blur-[65px]`}></div>
        <div className={`${styles.circleHeader} blur-[65px]`}></div>
        <img src={ImagenPizza} alt='imagen de una pizza' className='relative z-10 size-[76px] mx-auto' />
        <h1 className='relative z-40 text-center mt-5'>
          <span className='text-xl font-bold text-angy-texto-pri'>Pizzas</span> <br />
          <span className='text-[40px] font-lemon text-angy-orange-bold'>Angy</span>
        </h1>
        <p className='text-center relative z-10 text-angy-texto-sec font-bold leading-6 mt-3 mb-4'>
          Descubre las mejores pizzas de Doctor Mora
        </p>

        <Horario />
      </section>

    </header>

  )
}
export default Header