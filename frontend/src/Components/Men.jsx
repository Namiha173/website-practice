import React, { useEffect, useState } from "react";
import Nav from "./nav";
// import men1 from "../images/men1.jpg";

function Men() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let response = await fetch(`http://localhost:8000/men`);
      let result = await response.json();
      console.log(result);
      setImage(result[0].image);
      console.log(image);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="Men">
        {/* {image}
        {!isLoading && <img src={require(`../images/${image}`)} alt="image" />} */}
        {!isLoading && (
          <section className="men-section">
            <img
              src={require(`../images/${image}`)}
              alt="men1"
              className="men-img"
            />
            <p className="men-para">TRENDS TOWER </p>
            <h3 className="men-h3">Solid Men Round Neck Maroon T-Shirt</h3>
            <h1 className="men-h1">₹300</h1>
          </section>
        )}
      </div>
    </>
  );
}

export default Men;
