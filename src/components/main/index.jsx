import './style.css'
import ilustration from '../../assets/images/Illustration.svg'

const Main = () => {
    return(
         <main>
    <div class="content-lessons">
      <h1>Lessons and insights <span>from 8 years</span></h1>
      <p>Where to grow your business as a photographer: site or social media?</p>
      <button class="btn-primary">Register</button>
    </div>

    <div>
      <img src={ilustration}
        alt="Desenho Ilustrativo de uma pessoa no computador com códigos HTML, CSS e C++"
        title="Desenho Ilustrativo de uma pessoa no computador com códigos HTML, CSS e C++" />
    </div>
  </main>
    )
}


export default Main