
import { Navbar,Site , ExpandingWindow, Infinity, Cards, Testimonials } from "../../components"



function Home() {
  return (
    <div className="home">
        <Navbar login={true} />
        <Site/>
        <ExpandingWindow/>
        {/* <Infinity/> */}
        <Cards/>
        <Testimonials/>
    </div>
  )
}

export default Home