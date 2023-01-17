
import { Navbar,Site , ExpandingWindow, Infinity, Cards, Testimonials,Footer } from "../../components"

function Home() {
  return (
    <div className="home">
        <Navbar login={true} />
        <Site/>
        <ExpandingWindow/>
        {/* <Infinity/> */}
        <Cards/>
        <Testimonials/>
        {/* <Footer></Footer> */}
    </div>
  )
}

export default Home