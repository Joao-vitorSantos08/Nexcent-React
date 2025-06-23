import './style.css'
import frame35 from '../../assets/images/Frame 35.svg'

const Pixelgrade = () =>{
    return(
         <section class="Pixelgrade">
    <div>
      <img src={frame35} alt=" Desenho ilustrativos de duas pessoas fazendo login"
        title="Desenho ilustrativos de duas pessoas fazendo login" loading="lazy" />
    </div>
    <div class="Pixelgrade-content">
      <h2>The unseen of spending three years at Pixelgrade</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est
        varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam
        pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
        elementum pulvinar odio.</p>
      <button class="btn-primary">Learn More</button>
    </div>
  </section>
    )
}

export default Pixelgrade