import { COMUNIDADES } from "../../data"

const ServicioDomicilio = () => {
  return (
    <section className="contenedor padding-25">
      <h2 className="uppercase text-center text-angy-texto-pri font-bold text-xl mb-3">servico a domicilio</h2>
      <p className="text-center font-medium text-angy-texto-sec text-xs mb-6">Contamos con servicio a domicilio
      a las siguientes comunidades</p>

      <ul className="text-sm leading-6 font-medium list-disc w-fit mx-auto">
        {COMUNIDADES.map((comunidad, index) => (
          <li key={index}>{comunidad}</li>
        ))}
      </ul>

    </section>
  )
}
export default ServicioDomicilio