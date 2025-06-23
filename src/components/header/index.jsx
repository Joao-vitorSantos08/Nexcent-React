import logo from '../../assets/images/Logo.png';

import './style.css'
const Header = () =>{
    return(
         <header>

    <div className="logo">
      <img src={logo} alt="Logo Nexcent" title="Logo Nexcent" />
    </div>

    <div className="navegation">
      <nav className="nav-header">
        <ul>
          <a href="#">
            <li className="">Home</li>
          </a>
          <a href="#">
            <li>Service</li>
          </a>
          <a href="#">
            <li>Feature</li>
          </a>
          <a href="#">
            <li>Product</li>
          </a>
          <a href="#">
            <li>Testimonial</li>
          </a>
          <a href="#">
            <li>FAQ</li>
          </a>
        </ul>
      </nav>
    </div>
   
    <div className="btn-header">
      <a href="#"><button className="btn-login">Login</button></a>
      <a href="#"><button className="btn-SignUp">Sign up</button></a>
    </div>

    <div id="menu-toggle" className="menu-toggle">
      <div className="menu"></div>
      <div className="menu"></div>
      <div className="menu"></div>
    </div>
    

    <div id="navegation-mobile" className="navegation-mobile">
      <nav className="nav-header-mobile">
        <ul>
          <a href="#">
            <li className="">Home</li>
          </a>
          <a href="#">
            <li>Service</li>
          </a>
          <a href="#">
            <li>Feature</li>
          </a>
          <a href="#">
            <li>Product</li>
          </a>
          <a href="#">
            <li>Testimonial</li>
          </a>
          <a href="#">
            <li>FAQ</li>
          </a>
        </ul>
      </nav>

      <div className="btn-header-mobile">
        <a href="#"><button className="btn-login">Login</button></a>
        <a href="#"><button className="btn-SignUp">Sign up</button></a>
      </div>

    </div>
   

  </header>

    )
}

export default Header