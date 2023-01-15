import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from './app.firebase'

import { AuthContext } from "../context/authContext";
import { useContext } from "react";

//TODO: useContext not working

function GoogleSignin(){

  let userData;
  
    signInWithPopup(auth, googleProvider)
        .then((result) => {
      
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(result.user)

          userData = {
            name: result.user.displayName,
            email: result.user.email,
            google: result.user.uid,
            password: null
          }


          // ...
        })
        .catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.
          credentialFromError(error);
          console.log(errorMessage);
          
          // ...
        });

        return userData      
  }


export {
  GoogleSignin
}
