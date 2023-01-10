
import { Navbar, ExpandingWindow, Infinity, Cards } from "../../components"

function Home() {
  return (
    <div className="home">
        <Navbar login={true} />
        <ExpandingWindow/>
        <Infinity/>
        <Cards/>
    </div>
  )
}

export default Home