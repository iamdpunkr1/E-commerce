import { useState } from "react";
import model1Cart from "../assets/model1Cart.webp"

const CartItem = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Define the styles for the SVG
    const svgStyle =  isHovered ? "#FFFFFF" : "#000000"; // Change SVG color when hovered

  return (
    <div className="min-h-[130px] flex justify-between items-center gap-2 py-4 border-t-2 border-slate-900">
            
    <div className="flex items-center gap-x-4">
       <img src={model1Cart} alt="item1" className="w-1/4 "/>
       
       <div className="">
       <h1 className="text-white">Basic Cactus White T-shirt</h1>
       <h2 className="text-gray-400">S | Wine</h2>
       <h2 className="text-gray-400">Quantity: 1</h2>
       </div>
    </div>
    

    <div className="flex flex-col gap-4 text-right ">
        <button className="self-end" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <svg className="w-5 h-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
            <path
                fill={svgStyle}
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            />
            </g>
        </svg>
        </button>
       <h2 className="text-amber-400">$ 13.25</h2>
       <div className="flex justify-end text-white">
           <button className="px-2 bg-gray-600">-</button>
           <button className="px-2 bg-gray-700">+</button>
       </div>
    </div>
  </div>
  )
}

export default CartItem