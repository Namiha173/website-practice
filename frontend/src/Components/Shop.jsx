import React from "react";
import cloth1 from "../images/cloth1.jpg";
import Nav from "./nav";

function Shop() {
  return (
    <>
      <Nav />
      <div className="Shop">
        <section className="images">
          <img src={cloth1} alt="cloth" className="cloth-img" />
          <h1 className="discount">50% Discount</h1>
          <h1 className="megasale">MEGA SALE</h1>
        </section>
      </div>
    </>
  );
}

export default Shop;
