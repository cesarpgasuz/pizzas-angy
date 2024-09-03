import Direccion from "./components/sections/Direccion"
import Footer from "./components/sections/Footer"
import FormasPagos from "./components/sections/FormasPagos"
import Header from "./components/sections/Header"
import Menu from "./components/sections/Menu"
import ServicioDomicilio from "./components/sections/ServicioDomicilio"
import Tamanos from "./components/sections/Tamanos"

function App() {
  
  return (
    <>
      <Header />
      <Menu />
      <Tamanos />
      <Direccion />
      <ServicioDomicilio />
      <FormasPagos />
      <Footer />
    </>
  )
}

export default App
