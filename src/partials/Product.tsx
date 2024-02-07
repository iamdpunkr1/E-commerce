import  { useState } from "react";
import model1Product1 from "../assets/model1Product-1.webp";
import model1Product2 from "../assets/model1Product-2.webp";

const Product = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the styles for the button
  const buttonStyle = {
    backgroundColor: isHovered ? "#ff9900" : "#333", // Change button color when hovered
  };

  // Define the image source based on hover state
  const imageSource = isHovered ? model1Product2 : model1Product1;

  return (
    <div
      className="min-h-[400px] max-w-[374px] relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 bg-gray-900 text-white font-light text-[10px]  py-1 px-2">
        Free Shipping
      </div>
      <img src={imageSource} alt="Model1" className="w-full" />
      <p className="text-center mt-4 text-sm">Black Tule Oversized</p>
      <div className="w-6 h-[2px] bg-amber-500 my-2"></div>
      <h1>
        $ <span className="font-bold text-2xl">29</span>.45
      </h1>
      <h2 className="text-gray-500">
        or 5 x<span className="font-bold">$5.89</span>
      </h2>
      <button
        className="w-full bg-gray-900  text-white py-3  mt-4"
        style={buttonStyle} 
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
