import './App.css';

import { Footer, Navbar } from './components';
import { Home, SignUp, Login } from './pages';

function App() {
  return (
    <div>
      <Home/>
      <Login/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
