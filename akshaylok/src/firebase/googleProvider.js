import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from './app.firebase'


function GoogleSignin(){
    
    signInWithPopup(auth, googleProvider)
        .then((result) => {
      
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(result.user)
  
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
        
  }
export {
  GoogleSignin
}
