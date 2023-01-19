import React from 'react'
import "./faq.css";
import { Footer } from '../../components';

import { Navbar } from '../../components';


function Faq() {
  return (
    <div className="ques">
        <Navbar login={true}/>
        <section class="container">
            <div class="accordion">
                <h2 class="title">Frequently Asked Questions</h2>
                <article class="accordion-panel">
                    <input id="accordion-question" name="accordion" type="radio" checked />
                    <label for="accordion-question">
                        How the contracts are stored?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                        Smart contracts are executed on blockchain, which means that the terms are stored in a distributed database and cannot be changed. Transactions are also processed on the blockchain, which automates payments and counterparties.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-2" name="accordion" type="radio" checked/>
                    <label for="accordion-question-2">
                    What information must I provide to subscribe to an offer ?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                        Reference of your metering point: PDL (delivery point) for electricity . These 14-figure numbers are the only identifiers of your electricity   that you produce. 
                        Also you need to give a few of your personal details and type of renewable energy used.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-3" name="accordion" type="radio" checked />
                    <label for="accordion-question-3">
                    How do I make a contract?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                        Firstly you need a wallet track your Transactions.
                        The best option would be Metamask. If you don't have a metamask account then Go to MetaMask.io and click the “Download” button, which will take you to the relevant store to download the extension or app based on the device and browser you’re using.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-4" name="accordion" type="radio" checked />
                    <label for="accordion-question-4">
                    How long the contract would be valid?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                           It will be based on the government REC guidelines. Right now, it will remain valid for One thousand and ninety-five days from the date of issuance of such Contract.
                        </p>
                    </div>
                </article>
            </div>
        </section>
        <Footer/>
    </div>
)
}

export default Faq