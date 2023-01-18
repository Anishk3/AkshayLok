import "./cards.css";

import React from "react";

function Cards() {
  return (

    <div className="priceCard">
      <div class="heads">CHOOSE YOUR POWER</div>
      <div class="heads1">All contracts are stored in Ethereum Blockchain, making it secure and nearly impossible to tamper with.</div>
      <div class="cards">
        <div class="card shadow">
          <ul>
            <li class="pack">Lightening</li>
            <li id="basic" class="price bottom-bar">
              199.99
            </li>
            <li class="bottom-bar">Contract Deployment</li>
            <li class="bottom-bar">10% off on installation</li>
            <li class="bottom-bar">5% discount on repairs</li>
            <li>
              <button class="btn">Learn More</button>
            </li>
          </ul>
        </div>
        <div class="card active">
          <ul>
            <li class="pack">Bolt</li>
            <li id="professional" class="price bottom-bar">
              249.99
            </li>
            <li class="bottom-bar">Contract Deployment</li>
            <li class="bottom-bar">50 % off on insatallation</li>
            <li class="bottom-bar">1 annual repair</li>
            <li>
              <button class="btn active-btn">Learn More</button>
            </li>
          </ul>
        </div>
        <div class="card shadow">
          <ul>
            <li class="pack">Storm</li>
            <li id="master" class="price bottom-bar">
              399.99
            </li>
            <li class="bottom-bar">Contract Deployment</li>
            <li class="bottom-bar">0 Installation Charges</li>
            <li class="bottom-bar">3 free annual repairs</li>
            <li>
              <button class="btn">Learn More</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;
