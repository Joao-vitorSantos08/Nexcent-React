import './style.css'
import pana from '../../assets/images/pana.png'

const HowToDesing = () => {
    return(
        <section className="How-to-design">

    <div className="How-to-design-img">
      <img src={pana} alt=" Desenho ilustrativos de uma pessoa fazendo login em um celular "
        title="pessoa fazendo login"/>
    </div>

    <div className="How-to-design-content">
      <h2>How to design your site footer like we did</h2>
      <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc
        varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
        platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
        ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
        Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
      </p>
      <button className="btn-primary">Learn More</button>
    </div>
  </section>
    )
}

export default HowToDesing