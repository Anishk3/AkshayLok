import "./expandingWindow.css";

import { useRef, useEffect } from "react";
import $ from 'jquery';

function ExpandingWindow() {


  useEffect(() => {
    $(".option").click(function () {
      $(".option").removeClass("active");
      $(this).addClass("active");

    });
  }, [])


  return (
    <div className="expanding-main" >

      <div className="expanding-header" >
            How we are bringing a REVOLUTION!
      </div>
      <div className="below">
        We set up your own energy station, go green while earning money !
      </div>


      <div className="expanding">
        <div class="options">
          <div
            class="option active"
            style={{
              background:
                "url(https://media.istockphoto.com/id/1320142541/vector/family-budget-and-saving-money-concept.jpg?s=612x612&w=0&k=20&c=XhatIdJuEq_MjoSKfnI7yyTZ8eCf1Ex0T-SSNzKcJEE=)",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">
                <i class="fas fa-wallet"></i>
              </div>
              <div class="info">
                <div class="main">Passive Income</div>
                <div class="sub">Chill While Nature Does the Work</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background:
                "url(https://t4.ftcdn.net/jpg/04/29/45/07/360_F_429450700_NqhpLA6sUnkUqOhpumJXG87Mn7Q9u9O8.jpg)",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">
                <i class="fas fa-snowflake"></i>
              </div>
              <div class="info">
                <div class="main">Effortless Transactions </div>
                <div class="sub">Just Like You Switch On The Light</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background:
                "url(https://i0.wp.com/zenbird.media/wp-content/uploads/2021/02/ceconomy_sustainability.jpg?fit=1000%2C563&ssl=1)",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">
                <i class="fas fa-tree"></i>
              </div>
              <div class="info">
                <div class="main">Sustainability</div>
                <div class="sub">Making The Future Secure</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background:
                "url(https://i.pinimg.com/originals/14/5d/7e/145d7e2842bff5b01d3308603fe75d05.png)",
              backgroundSize:"cover"
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">
                <i class="fas fa-tint"></i>
              </div>
              <div class="info">
                <div class="main">Transparency</div>
                <div class="sub">Another Word For Blockchain</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background: "url(https://t4.ftcdn.net/jpg/03/02/52/43/360_F_302524365_Pwzg1riS5qrY5UlnejLNWHkbQDc4EhcT.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">
                <i class="fas fa-sun"></i>
              </div>
              <div class="info">
                <div class="main">Security</div>
                <div class="sub">we are impenetrable</div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}

export default ExpandingWindow;