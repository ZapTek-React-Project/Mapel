import React from "react";
import "/src/pages/Services.css";

import { Link } from "react-router-dom";
// Select all FAQ sections
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".faq-question");
  const plusBtn = faq.querySelector(".plus-btn");

  // Add click event listener to each question
  question.addEventListener("click", () => {
    // Toggle the 'open' class
    faq.classList.toggle("open");

    // Toggle the "+" and "-" sign
    plusBtn.textContent = plusBtn.textContent === "+" ? "−" : "+";
  });
});

const FAQ = () => {
  return (
    <div>
      <div className="faq-title">
        <img src="/Servicesimages/homepic.svg" width={18} height={20} />
        <div>
          <h4>FAQ'S</h4>
        </div>
      </div>
      <hr className="thin-line"></hr>
      <div className="faq-subtitle">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        <div className="faq-image">
          <img src="/Servicesimages/faqimage.jpg" width={500} height={900} />
        </div>
        <div className="questions-container">
          <div className="question-box">
            <div className="faq-question">
              <p>Do I need to get pre-approved before looking at properties?</p>
              <span className="plus-btn">+</span>
            </div>
          </div>
          <div className="question-box">
            <div className="faq-question">
              <p>What's the difference between a buyer's and seller's agent?</p>
              <span className="plus-btn">+</span>
            </div>
            <div class="faq-answer">
              <p>
                A buyer’s agent represents the buyer in finding and negotiating
                a property, while a seller’s agent helps the property owner
                sell.
              </p>
            </div>
          </div>
          <div className="question-box">
            <div className="faq-question">
              <p>How do I know I'm getting a good deal on a property?</p>
              <span className="plus-btn">+</span>
            </div>
          </div>
          <div className="question-box">
            <div className="faq-question">
              <p>What's the best way to find property that fits my budget?</p>
              <span className="plus-btn">+</span>
            </div>
          </div>
          <div className="question-box">
            <div className="faq-question">
              <p>
                Are there specific neighbourhoods you recommend for families?
              </p>
              <span className="plus-btn">+</span>
            </div>
          </div>
          <div className="question-box">
            <div className="faq-question">
              <p>What should I do if I want to make an offer on a property?</p>
              <span className="plus-btn">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
