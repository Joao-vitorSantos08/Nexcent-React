import './style.css'
import image9 from '../../assets/images/image 9.svg'
import logoRoxo from '../../assets/images/logo-roxo.svg'
import Logo2clientes from '../../assets/images/Logo2clientes.svg'
import Logo3cliente from '../../assets/images/Logo3cliente.svg'
import Logo4cliente from '../../assets/images/Logo4cliente.svg'
import Logo5cliente from '../../assets/images/Logo5cliente.svg'
import Logo6cliente from '../../assets/images/Logo6cliente.svg'
import SetaParaDireita from '../../assets/images/seta-para-direita.svg'

const Customer = () =>{
    return(
<section className="customer">
    <div>
      <img src={image9}alt="Togo da  Tesla" title="Logo da Tesla" loading="lazy"/>
    </div>

    <div className="customer-content">
      <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
        ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie
        arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus
        tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
        Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
        neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
      <h2>Tim Smith</h2>
      <p>British Dragon Boat Racing Association</p>

      <div className="customer-container">
        <div className="customer-itens">
          <img src={logoRoxo} alt="logo 1" title="logo 1"/>
          <img src={Logo2clientes} alt="logo 2" title="logo 2"/>
          <img src={Logo3cliente} alt="logo 3" title="logo 3"/>
          <img src={Logo4cliente} alt="logo 4" title="logo 4"/>
          <img src={Logo5cliente} alt="logo 5" title="logo 5"/>
          <img src={Logo6cliente} alt="logo 6" title="logo 6"/>
        </div>

        <div className="customer-navigation">
          <a href="#">
            <p>Meet all customers</p>
            <img src={SetaParaDireita} alt=""/>
          </a>
        </div>
      </div>
    </div>

</section>
    )
}

export default Customer