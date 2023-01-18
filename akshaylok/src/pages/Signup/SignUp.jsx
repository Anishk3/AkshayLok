import { GoogleSignin } from "../../firebase/googleProvider";
import google from "../../assets/img/google.png";

import { Link } from "react-router-dom";

import { Navbar } from "../../components/index";
import akshayLok from "../../assets/img/AkshayLok.png";

function SignUp() {
  return (
    <div>
      <div className="login">
        <div className="img">
          <img src={akshayLok} alt="logo" />
          <h3>
          <span className="h3Span" >Distributing Energy</span>
          <span>Empowering People</span>
        </h3>
        </div>
        <main class="main">
          <div class="container">
            <section class="wrapper">
              <div class="heading">
                <h1 class="text text-large">Sign Up</h1>
                <p class="text text-normal">
                  Existing User?
                  <span>
                    <Link to="/login" class="text text-links">
                      Login Here!
                    </Link>
                  </span>
                </p>
              </div>
              <form name="signin" class="form">
                <div class="input-control">
                  <label for="email" class="input-label" hidden>
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="input-field"
                    placeholder="Name"
                  />
                </div>

                <div class="input-control">
                  <label for="tel" class="input-label" hidden>
                    Email Address
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    class="input-field"
                    placeholder="Contact Number"
                  />
                </div>

                <div class="input-control">
                  <label for="email" class="input-label" hidden>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="input-field"
                    placeholder="Email Address"
                  />
                </div>
                <div class="input-control">
                  <label for="password" class="input-label" hidden>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="input-field"
                    placeholder="Password"
                  />
                </div>
                <div class="input-control">
                  <a href="#" class="text text-links">
                    Forgot Password
                  </a>
                  <input
                    type="submit"
                    name="submit"
                    class="input-submit"
                    value="Sign In"
                    disabled
                  />
                </div>
              </form>
              <div class="striped">
                <span class="striped-line"></span>
                <span class="striped-text">Or</span>
                <span class="striped-line"></span>
              </div>

              <div className="button">
                <button onClick={GoogleSignin}>
                  <img src={google} alt="" />
                  <span>Google</span>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
