import './style.css'
import logo1 from '../../assets/images/Logo1clientes.svg'
import logo2 from '../../assets/images/Logo2clientes.svg'
import logo3 from '../../assets/images/Logo3cliente.svg'
import logo4 from '../../assets/images/Logo4cliente.svg'
import logo5 from '../../assets/images/Logo5cliente.svg'
import logo6 from '../../assets/images/Logo6cliente.svg'

const OurClients = () => {
    return (
        <section class="Our-Client">
    <h2>Our Clients</h2>
    <p>We have been working with some Fortune 500+ clients</p>
    <div class="Logo-clients">
      <img src={logo1} alt="" />
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
      <img src={logo4} alt="" />
      <img src={logo5} alt=""/>
      <img src={logo6} alt="" />
      <img src={logo3} alt="" />
    </div>
  </section>

    )
}

export default OurClients