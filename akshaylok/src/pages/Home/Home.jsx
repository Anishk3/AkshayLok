
import { Navbar, ExpandingWindow, Infinity, Cards, Testimonials } from "../../components"

function Home() {
  return (
    <div className="home">
        <Navbar login={true} />
        <ExpandingWindow/>
        <Infinity/>
        <Cards/>
        <Testimonials/>
    </div>
  )
}

export default Home