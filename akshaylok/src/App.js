import './App.css';

import { Footer } from './components';
import { Home, SignUp, Login } from './pages';
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

import {auth} from './firebase/app.firebase.js'

function App() {


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("user uid", uid)
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
          <Route path='/' element = {<Home/>} ></Route>
          <Route path='/login' element = {<Login/>} ></Route>
          <Route path='/signup' element = {<SignUp/>} ></Route>
        </Routes>
      </Routers>
      
      <Footer/>
    </div>
  );
}

export default App;
