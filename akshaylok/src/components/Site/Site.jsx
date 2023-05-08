import "./site.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
function Site() {
  const navigate = useNavigate();
  const navigateSignup = () => {
    // 👇️ navigate to /
    navigate('/signup');
  };
  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };
  return (
    <div className="site">
        <div class="site__title">Giving more power to YOU</div>
        <div class="site__subtitle">Registering to the Grid has never been this Easier</div>
        <div class="site__box-link">
        <button class="btn btn--width" onClick={navigateLogin}>Login</button>
        <button class="btn btn--revert btn--width" onClick={navigateSignup}>Sign-Up now</button>
        </div>
        <img class="site__img" src="https://image.ibb.co/c7grYb/image3015.png"></img>
    </div>
  )
}

export default Site