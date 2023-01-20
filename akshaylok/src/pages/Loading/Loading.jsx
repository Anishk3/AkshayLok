import "./loading.css";
import bounce from "../../assets/img/bounce.mp4";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  }, []);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);

  return (
    <div className="load">
      <div className="overlay"></div>
      <video src={bounce} autoPlay loop />
      <div className="content">

		<h1 className="progressbar" >Loading...</h1>
        {/* <div>
          <div className="progressbar">
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#1a73e8",
                transition: "width 0.5s",
              }}
            ></div>
            <span className="progressPercent">{filled}%</span>
          </div>
          <button
            className="btn"
            onClick={() => {
              setIsRunning(true);
            }}
          >
            Run
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Loading;
