import { handleSignout } from "../../firebase/signOut";
import { GoogleSignin } from "../../firebase/googleProvider";


function Login() {

  return (
    <div>
      <button onClick={GoogleSignin}>google</button>
      <button onClick={GoogleSignin}>facebook</button>
      <button onClick={handleSignout}>sign out</button>
    </div>
  );
}

export default Login;
