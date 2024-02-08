import  {  useState } from "react";
import { IProduct } from "../context/ProductContext";


const Product = ({title, isFreeShipping, sku, price, ...rest}: IProduct) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#ff9900" : "#333", // Change button color when hovered
  };

  // Define the image source based on hover state
  const imageSource = isHovered ? `/src/static/products/${sku}-2-product.webp` : `/src/static/products/${sku}-1-product.webp`;

  return (
    <div
      className=" max-w-[374px] relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isFreeShipping &&
      
      <div className="absolute top-0 right-0 bg-gray-900 text-white font-light text-[10px]  py-1 px-2">
        Free Shipping
      </div>
      }

      <img src={imageSource} alt="Model1" className="w-full min-h-[270px]" />
      <p className="text-center mt-4 text-sm">{title}</p>
      <div className="w-6 h-[2px] bg-amber-500 my-2"></div>
      <h1>
        $ <span className="font-bold text-2xl">{price}</span>.45
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
