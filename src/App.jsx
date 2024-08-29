import Direccion from "./components/Direccion"
import Footer from "./components/Footer"
import FormasPagos from "./components/FormasPagos"
import Header from "./components/Header"
import Menu from "./components/Menu"
import ServicioDomicilio from "./components/ServicioDomicilio"
import Tamanos from "./components/Tamanos"

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
