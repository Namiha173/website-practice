import React from "react";
import Nav from "./nav";
import women1 from "../images/women1.jpeg";
import women2 from "../images/women2.jpg";




function Women() {
  return (
    <>
      <Nav />
      <div className="Women">
      <section className="women-section">
          <img src={women1} alt="women1" className="women-img" />
          <p className="women-para">SELVIA</p>
          <h3 className="women-h3">Women A-line Multicolor, Dark Blue, Pink, Beige Dress</h3>
          <h1 className="women-h1">₹600</h1>
        </section>
        <section className="women-section">
          <img src={women2} alt="women2" className="women-img" />
          <p className="women-para">MS BOTTOM</p>
          <h3 className="women-h3">Slim Fit Women Pink Lycra Blend Trousers</h3>
          <h1 className="women-h1">₹800</h1>
        </section>


      </div>
    </>
  );
}

export default Women;
