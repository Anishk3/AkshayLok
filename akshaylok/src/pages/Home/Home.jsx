
import { Navbar, ExpandingWindow, Infinity } from "../../components"

function Home() {
  return (
    <div className="home">
        <Navbar login={true} />
        <ExpandingWindow/>
        <Infinity/>
    </div>
  )
}

export default Home