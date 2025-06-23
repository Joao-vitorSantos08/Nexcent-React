import './style.css'
import HelpingItensMenber from '../../assets/images/helping-Itens-member.png'
import HelpingItensClub from '../../assets/images/helping-itens-Clubs.png'
import HelpingItensEventBookings from '../../assets/images/helping-itens-Event-Bookings.png'
import HelpingItensPayments from '../../assets/images/helping-itens-Payments.png'

const HelpingLocal = () =>{
    return(
              <section className="Helping-Local" >
    <div className="helpin-content">
      <h2>Helping a local <span> business reinvent itself</span></h2>
      <p>We reached here with our hard work and dedication</p>
    </div>

    <div className="helpin-statistic">
    
      <div className=" helpin-itens">
        <img src={HelpingItensMenber} alt="" />
        <div className="information-itens">
          <h3>2,245,341</h3>
          <p>Members</p>
        </div>
      </div>

      <div className=" helpin-itens">
        <img src={HelpingItensClub} alt=""/>
        <div className="information-itens">
          <h3>828,867</h3>
          <p>Event Bookings</p>
        </div>
      </div>

      <div className=" helpin-itens">
        <img src={HelpingItensEventBookings} alt=""/>
        <div className="information-itens">
          <h3>46,328</h3>
          <p>Clubs</p>
        </div>
      </div>

      <div className=" helpin-itens">
        <img src={HelpingItensPayments} alt="" />
        <div className="information-itens">
          <h3>1,926,436</h3>
          <p>Payments</p>
        </div>
      </div>

    </div>
  </section>
    )
}

export default HelpingLocal