import './App.css';

import { useContext } from 'react';
import { AuthContext } from "./context/authContext";


import { Footer } from './components';
import { Home, SignUp, Login, StartingPage, About, Form, Faq, Trans,} from './pages';
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';


import {auth} from './firebase/app.firebase.js'

function App() {

  const {isConnected}  = useContext(AuthContext)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ...
    } else {
      console.log('User is signed out')
      // ...
    }
  });

  return (
    <div>

      <Routers>
        <Routes>
          <Route 
            path='/'
            element = { isConnected ? <Home/> : <Login login={false} />}> 
          </Route>

          <Route 
            path='/login' 
            element = { isConnected ? <Home/> : <Login login={false} />}> 
          </Route>

          <Route 
            path='/signup' 
            element = {<SignUp login={false} />}>
          </Route>

          <Route 
            path='/starting' 
            element = { isConnected ? <StartingPage/> : <Login login={false} /> }> 
          </Route>

          <Route 
            path='/about' 
            element = { isConnected ? <About/> : <Login login={false} /> }> 
          </Route>

          <Route 
            path='/form' 
            element = { isConnected ? <Form/> : <Login login={false} /> }> 
          </Route>

          <Route 
            path='/Faq' 
            element = { isConnected ? <Faq/> : <Login login={false} /> }> 
          </Route>

          <Route 
            path='/Trans' 
            element = { isConnected ? <Trans/> : <Login login={false} /> }> 
          </Route>
        </Routes>
      </Routers>
      
      <Footer/>
    </div>
  );
}

export default App;
