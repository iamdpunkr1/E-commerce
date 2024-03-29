import  {  useContext, useEffect, useState } from "react";
import { IProduct } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";


const Product = ({id,title, isFreeShipping, sku, price, installments, availableSizes,style}: IProduct) => {
  
  const {cartItems, setCartItems, setIsOpen} = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const [imageSource, setImageSource] = useState<string[]>([]);


  // Splitting the price into dollars and cents
  const [dollars, cents] = price.toString().split(".");
  const buttonStyle = {
    backgroundColor: isHovered ? "#ff9900" : "#333", // Change button color when hovered
  };


  const handleClick = () => {

    const itemInCart = cartItems.find(c => c.id === id)
    if(itemInCart) setCartItems(cartItems.map(c => c.id===id? { ...c, quantity: c.quantity+1}: c))
    else setCartItems([...cartItems, {id, title, sku, price, installments, availableSizes, style, quantity:1}])

    setIsOpen(true);
    
  }

  useEffect(()=>{
    async function getProductImage() {
      const imageUrl = await import(`../assets/products/${sku}-2-product.webp`);
      const imageUrl2 = await import(`../assets/products/${sku}-1-product.webp`);

      setImageSource([imageUrl.default, imageUrl2.default])
    }

    getProductImage();

  },[sku])

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
      
      <img src={isHovered? imageSource[0]: imageSource[1]} alt="Model1" className="w-full min-h-[270px]" />
      <p className="text-center mt-4 text-sm">{title}</p>
      <div className="w-6 h-[2px] bg-amber-500 my-2"></div>
      <h1>
        $ <span className="font-bold text-2xl">{dollars}</span>.{cents}
      </h1>
      {installments !== 0 ?
      <h2 className="text-gray-500">
        or {installments} x<span className="font-bold">${(price/installments).toFixed(2)}</span>
      </h2>
      : <h2 className="my-3"></h2>
      }
      <button
        onClick={handleClick}
        className="w-full bg-gray-900  text-white py-3  mt-4"
        style={buttonStyle} 
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
