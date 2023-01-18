import './about.css'
import { Navbar } from '../../components'

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
      <div class="container">
                    <div class="row">
                        <div class="heading-title text-center">
                            <h3 class="text-uppercase">Our professionals </h3>
                            <p class="p-top-30 half-txt">Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. </p>
                        </div>

                        <div class="col-md-4 col-sm-4">
                            <div class="team-member">
                                <div class="team-img">
                                    <img src="https://image.freepik.com/free-photo/man-standing-with-a-black-t-shirt_1187-1045.jpg" alt="team member" class="img-responsive" />
                                </div>
                                <div class="team-hover">
                                    <div class="desk">
                                        <h4>Hi There !</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div class="s-link">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="team-title">
                                <h5>AkshayLok</h5>
                                <span>founders</span>
                            </div>
                        </div>

                    </div>

                </div>


      {/* <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img> */}

    </div>
  )
}

export default About