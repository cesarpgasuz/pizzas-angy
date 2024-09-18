import IconoPizza from '../../assets/images/pizza.png'

const Footer = () => {
  return (
    <section className='contenedor pt-20 pb-7'>
      <img src={IconoPizza} alt='Imagen de una pizza' className='size-20 mx-auto' />
      <p className='text-center font-bold text-sm text-angy-texto-pri mt-4'>Sabor auténtico en cada bocado.</p>
      <p className='text-center font-medium text-xs text-angy-texto-sec mt-14'>Pizzas Angy.  Copyright © {new Date().getFullYear()}</p>
    </section>
  )
}
export default Footer