import './style.css'
import LogoFooter from '../../assets/images/Logo-footer.svg'
import Path from '../../assets/images/Path.svg'
import FooterDibbleee from '../../assets/images/footer-dibbleee.svg'
import LogoTwitter from '../../assets/images/logo-twitter.svg'
import LogoYoutube from '../../assets/images/logo-youtube.svg'
import LogoStayButton from '../../assets/images/logo-stay-button.svg'

const Footer = () => {
    return(
        <footer>
      <div>
        <img src={LogoFooter}alt=""/>
        <div className="Copyright">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>

        <div className="footer-socials">
          <div className="social-icons">
            <img src={Path} alt="logo do intagram"/>
          </div>

          <div className="social-icons">
            <img src={FooterDibbleee} alt="logo do dibbleee" />
          </div>

          <div className="social-icons">
            <img src={LogoTwitter}alt="logo do twitter" />
          </div>
          <div class="social-icons">
            <img src={LogoYoutube} alt="logo do youtube"/>
          </div>
        </div>
      </div>

      <div className="footer-navigation">
         <div className="footer-container">
            <h2>Company</h2>
            <nav>
                <ul className="footer-links">
                  <li><a href="#"className="footer-item">About us</a></li>
                  <li><a href="#"className="footer-item">Blog</a></li>
                  <li><a href="#"className="footer-item">Contact us</a></li>
                  <li><a href="#"className="footer-item">Pricing</a></li>
                  <li><a href="#"className="footer-item">Testimonials</a></li>
                </ul>
            </nav>
          </div>

      <div className="footer-container">
        <h2>Support</h2>
        <nav>
            <ul className="footer-links">
              <li><a href="#"className="footer-item">Help center</a></li>
              <li><a href="#"className="footer-item">Terms of service</a></li>
              <li><a href="#"className="footer-item">Legal</a></li>
              <li><a href="#"className="footer-item">Privacy policy</a></li>
              <li><a href="#"className="footer-item">Status</a></li>
            </ul>
        </nav>
      </div>
    
    <div className="footer-container">
      <h2>Stay up to date</h2>
      <form className="footer-container">
        <input type="email" placeholder="Your email address" required />
        <button type="submit" className="stay-button">
          <img src={LogoStayButton} alt="" />
        </button>

      </form>
    </div>
  </div>

  </footer>
    )
}

export default Footer