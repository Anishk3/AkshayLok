import "./cards.css";

import React from "react";

function Cards() {
  return (
    <div className="priceCard">
      <div class="cards">
        <div class="card shadow">
          <ul>
            <li class="pack">Basic</li>
            <li id="basic" class="price bottom-bar">
              199.99
            </li>
            <li class="bottom-bar">500 GB Storage</li>
            <li class="bottom-bar">2 Users Allowed</li>
            <li class="bottom-bar">Send up to 3 GB</li>
            <li>
              <button class="btn">Learn More</button>
            </li>
          </ul>
        </div>
        <div class="card active">
          <ul>
            <li class="pack">Professional</li>
            <li id="professional" class="price bottom-bar">
              249.99
            </li>
            <li class="bottom-bar">1 TB Storage</li>
            <li class="bottom-bar">5 Users Allowed</li>
            <li class="bottom-bar">Send up to 10 GB</li>
            <li>
              <button class="btn active-btn">Learn More</button>
            </li>
          </ul>
        </div>
        <div class="card shadow">
          <ul>
            <li class="pack">Master</li>
            <li id="master" class="price bottom-bar">
              399.99
            </li>
            <li class="bottom-bar">2 TB Storage</li>
            <li class="bottom-bar">10 Users Allowed</li>
            <li class="bottom-bar">Send up to 20 GB</li>
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
