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
      <div className="walkThrough">
        <div className="walkHeader" id="walk" >Walk Through</div>
        <div className="walkDetails">
          <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <ul className="space-y-12">
              <li className="flex items-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center h-8 text-sm hover:underline"
                >
                  1.
                </a>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                      ></span>
                      <span className="group-hover:underline dark:text-gray-100">
                        Metamask
                      </span>
                    </a>
                  </div>
                  <div>
                    <p>
                      Go to Chrome Web Store Extensions Section. Search
                      MetaMask. Click the Add to Chrome button.
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center h-8 text-sm hover:underline"
                >
                  2.
                </a>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                      ></span>
                      <span className="group-hover:underline dark:text-gray-100">
                          Connect With Metamask.
                      </span>
                    </a>
                  </div>
                  <div>
                    <p>
                      You can connect your  Metamask Id with our website by clicking the Not-Connected button on the top right corner. Once connected it will be displayed as connected.
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center h-8 text-sm hover:underline"
                >
                  3
                </a>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                      ></span>
                      <span className="group-hover:underline dark:text-gray-100">
                        Choose a Product
                      </span>
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p>
                      User can choose any required products from the various options listed in the products section. Once the user finds his required product he can simply buy the product by clicking on the buy button. 
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center h-8 text-sm hover:underline"
                >
                  4
                </a>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"
                      ></span>
                      <span className="group-hover:underline dark:text-gray-100">
                        Order Successfull
                      </span>
                    </a>
                  </div>
                  <div className="space-y-2" id="end" >
                    <p>
                      Once an order is placed by the user, Metamask will pop up and your transaction reciept will be made available on etherscan. As soon as your transaction will be successfull seller will get an order request message.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img> */}

    </div>
  )
}

export default About