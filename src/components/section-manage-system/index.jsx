import './style.css'
import icon1manage from '../../assets/images/icon1manege.svg'
import icon2manage from '../../assets/images/icon2manage.svg'
import icon3manage from '../../assets/images/Icon3manege.svg'

const ManageSystaem = () =>{
    return(
        <section class="manage-system">
    <h2>Manage your entire community in a single system</h2>
    <p id="manage-system-subtitle">Who is Nextcent suitable for?</p>

    <div class="cards-container">
      <article>
        <img src={icon1manage} alt=" icone grupo de pessoas" title="icone grupo de pessoas"
          loading="lazy" />
        <h3>Membership Organisations</h3>
        <p>Our membership management software provides full automation of membership renewals and payments</p>
      </article>

      <article>
        <img src={icon2manage} alt="icone de empresa" title="icone de empresa" loading="lazy" />
        <h3>National Associations</h3>
        <p>Our membership management software provides full automation of membership renewals and payments</p>
      </article>

      <article>
        <img src={icon3manage} alt="  icone de mão pessoas" title=" icone de mão pessoas"
          loading="lazy" />
        <h3>Clubs And Groups</h3>
        <p>Our membership management software provides full automation of membership renewals and payments</p>
      </article>

    </div>
  </section>
    )
}

export default ManageSystaem