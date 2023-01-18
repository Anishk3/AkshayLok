import React from 'react'
import "./faq.css";
import { Navbar } from "../../components";


function Faq() {
  return (
    <div className="ques">
            <Navbar login={true} />
        <section class="container">
            <div class="accordion">
                <h2 class="title">Frequently Asked Questions</h2>
                <article class="accordion-panel">
                    <input id="accordion-question" name="accordion" type="radio" checked />
                    <label for="accordion-question">
                        What is an apple?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloribus blanditiis
                            sint quas inventore labore sit architecto vel similique neque earum eligendi molestias,
                            autem officia quia sapiente vitae nostrum aperiam?
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-2" name="accordion" type="radio" checked/>
                    <label for="accordion-question-2">
                        What is a banana?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam, dignissimos ea
                            distinctio maiores sed iure eius recusandae esse quod tenetur officiis, unde optio qui nemo
                            cum numquam quisquam mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deserunt, suscipit voluptatem! Itaque labore harum quam odio, ratione saepe deleniti tempore
                            ipsam rem aliquam minima esse voluptatum quo necessitatibus! Veritatis, sapiente! Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit. Suscipit architecto nam ipsa illo
                            maxime, iste.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-3" name="accordion" type="radio" checked />
                    <label for="accordion-question-3">
                        What is an orange?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid aspernatur neque
                            impedit cupiditate enim, laudantium eaque provident at facilis velit, dolor facere eligendi
                            dicta libero odit eum consequuntur ipsam.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-4" name="accordion" type="radio" checked />
                    <label for="accordion-question-4">
                        What is a strawberry?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum excepturi id expedita numquam
                            ipsum nisi, itaque magnam voluptates laborum similique incidunt repellat est maxime in
                            tempore officia omnis neque quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Distinctio, itaque corporis! Rerum excepturi, aliquam voluptatum architecto, natus quidem id
                            eius sequi quas repudiandae nemo suscipit voluptas qui aliquid. Minus, doloremque!
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
)
}

export default Faq