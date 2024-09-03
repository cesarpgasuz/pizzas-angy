import { PIZZAS } from "../../data"
import styles from '../../styles/menu.module.css'

const Menu = () => {
  return (
    <section className="contenedor padding-25">
        <h2 className="uppercase text-center text-angy-texto-pri font-bold text-xl mb-6">menu</h2>

        <div className="grid gap-6">

            {PIZZAS.map(pizza => (

              <div key={pizza.id} className="bg-angy-orange-medium/40 rounded-md flex border border-angy-orange-medium gap-4 py-[10px] px-3">
                  <img src={`./images/${pizza.imagen}`} alt={`pizza ${pizza.nombre}`} className="size-[86px]" />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="font-semibold">{pizza.nombre}</h3>
                    <ul className={`flex flex-wrap ${styles.itemPizza}`}>
                      {pizza.ingredientes.map(index => (
                        <li key={index} className="capitalize text-xs mr-1">{index}</li>
                    ))}
                    </ul>
                    
                  </div>
              </div>

            ))}

        </div>


    </section>
  )
}
export default Menu