import './about.css'
import { Navbar } from '../../components'
import { Footer } from '../../components';

function About() {
  return (
    <div className='about'>
      <Navbar login={true} />
      <div className='about-text' >
        <div class="text-area">About Us</div>
        <div className='about-body' >
          <div class="Heading">
            We are a DISCOM based on Blockchain Technology
          </div>
          <div class="desc">
            AkshayLok is a Renewable resource management software that uses blockchain technology. We propose a novel decentralized security model between the user and the government. The technology integrates blockchain technology with the Interplanetary File System (IPFS) that allows buyers and sellers of electricity to enter a market long dominated by central power plants and enormous utilities and allows the generators, buyers, and sellers to be able to manoeuvre along the transmission path. This allows renewable energy certification processes to be sped up and automated, as there is greater traceability. This technology also guarantees the transparency and security of the transaction, which remains permanently recorded in the platform, allowing all parties to audit the results. This project also makes it possible to work under smart contracts performed automatically when both parties fulfill the agreed terms, thereby cutting out intermediaries and simplifying the process. This reduces costs and increases privacy.
          </div>
        </div>
      </div>


      {/* <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img> */}
    <Footer/>
    </div>
  )
}

export default About