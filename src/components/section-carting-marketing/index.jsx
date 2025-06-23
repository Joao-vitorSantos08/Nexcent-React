import './style.css'
import CaringCards1 from '../../assets/images/caring-cards1.svg'
import CaringCardsSeta from '../../assets/images/caringCardsSeta.svg'
import CaringCards2 from '../../assets/images/caringcards2.svg'
import CaringCards3 from '../../assets/images/caringCards3.svg'

const CartingMarketing = () => {
    return(
        <section className="caring-marketing">
    <h2>Caring is the new marketing</h2>
    <p className='caring-marketing-p'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>

    <div class="caring-marketing-container">
      <article className="caring-cards">
        <img src={CaringCards1} alt="pessoa sentada em um sofá mexendo em um netebook"
          title="pessoa mexendo em um netebook"/>
        <div className="caring-cards-content">
          <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
          <a href="#">
            <p>Readmore</p>
            <img src={CaringCardsSeta} />
          </a>
        </div>
      </article>

      <article className="caring-cards">  
        <img src={CaringCards2} alt="pessoa analizando Gráfico em um netebook"
          title="pessoa analizando Gráfico em um netebook" loading="lazy"/>
        <div className="caring-cards-content">
          <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
          <a href="#">
            <p>Readmore</p>
            <img src={CaringCardsSeta}/>
          </a>
        </div>
      </article>

      <article className="caring-cards">
        <img src={CaringCards3} alt="pessoa estudando com seu netebook" title="pessoa estudando com seu netebook" loading="lazy"/>
        <div className="caring-cards-content">
          <h3>Revamping the Membership Model with Triathlon Australia</h3>
          <a href="#">
            <p>Readmore</p>
            <img src={CaringCardsSeta} />
          </a>
        </div>
      </article>
    </div>
  </section>
    )
}

export default CartingMarketing