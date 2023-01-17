import './App.css';

import { Footer } from './components';
import { Home, SignUp, Login, StartingPage, About,Faq } from './pages';
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

import {auth} from './firebase/app.firebase.js'

function App() {


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("user uid", user)
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
          <Route path='/' element = {<Home/>}> </Route>
          <Route path='/login' element = {<Login login={false} />}> </Route>
          <Route path='/signup' element = {<SignUp login={false} />}> </Route>
          <Route path='/starting' element = {<StartingPage/>}> </Route>
          <Route path='/about' element = {<About/>}> </Route>
          <Route path='/Faq' element = {<Faq/>}> </Route>
        </Routes>
      </Routers>
      
      <Footer/>
    </div>
  );
}

export default App;
