import "./startingPage.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

function StartingPage() {
  const card = useRef();

  let cardWidth = 500,
    degIncrement = 2;
  // card = document.getElementById("card");

  const getRotateDeg = (input) => {
    if (input < cardWidth * 0.33) {
      return `-${degIncrement * 3}deg`;
    } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
      return `-${degIncrement}deg`;
    } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
      return "0deg";
    } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
      return `${degIncrement}deg`;
    } else {
      return `${degIncrement * 2}deg`;
    }
  };

  const onMouseMove = (event) => {
    const { target } = event;
    const rect = target.getBoundingClientRect();

    const rotateX = getRotateDeg(event.clientY - rect.top);
    const rotateY = getRotateDeg(event.clientX - rect.left);

    card.current.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
  };

  const onMouseLeave = () => {
    card.current.style.transform = `none`;
  };

  return (
    <div className="starting">
      <div
        id="card"
        class="card"
        onMouseMove={(e) => {
          onMouseMove(e);
        }}
        onMouseLeave={(e) => {
          onMouseLeave(e);
        }}
        ref={card}
      >
        <h1>Welcome</h1>
        <Link to='/' style={{textDecoration: 'none'}} >
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default StartingPage;
