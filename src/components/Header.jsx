import ImagenPizza from '../assets/images/pizza.png'
import styles from '../styles/header.module.css'
const Header = () => {
  return (
    <header className='contenedor relative'>
        <div className={`${styles.circleHeader} blur-[65px]`}></div>
        <div className={`${styles.circleHeader} blur-[65px]`}></div>
        <img src={ImagenPizza} alt='imagen de una pizza'  className='relative z-10'/>
        <h1><span className='text-xl font-montserrat font-bold'>Pizzas</span> <br /><span className='text-[40px] font-lemon'>Angy</span></h1>
    </header>
  )
}
export default Header