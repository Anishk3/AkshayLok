import { signOut } from "firebase/auth";
import {auth} from '../firebase/app.firebase.js'

function handleSignout(){
    signOut(auth).then(() => {
        console.log('Sign-out successful.')
      }).catch((error) => {
        
      });
}

export {
    handleSignout
}
