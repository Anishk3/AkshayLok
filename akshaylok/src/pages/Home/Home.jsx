
import { Site , ExpandingWindow, Infinity, Cards, Testimonials,Footer,Contact } from "../../components"



function Home() {
  return (
    <div className="home">
        {/* <Navbar login={true} /> */}
        <Site/>
        <ExpandingWindow/>
        {/* <Infinity/> */}
        <Cards/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home