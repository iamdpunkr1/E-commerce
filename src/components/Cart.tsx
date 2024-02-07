
import { useState } from "react";
import CartIcon from "../partials/CartIcon";
// import model1Cart from "../assets/model1Cart.webp"
import CartItem from "../partials/CartItem";

const Cart = () => {
  const [show, setShow] = useState(false);


  return (
    <div  className={`fixed ocerflow-hidden h-dvh flex flex-col w-full md:w-[450px] lg:w-[450px] bg-gray-800 top-0 right-0 transition all duration-300 ease-in ${show?"translate-x-0":"translate-x-full"}`}>
        {/* MENU Bar */}
        <div onClick={()=> setShow(!show)} className=" bg-gray-800 py-2 px-2 text-white relative top-0 -left-12 cursor-pointer">
           
           {
            !show ? 
            <CartIcon/> 
            : <div className="font-semibold hover:bg-slate-900 px-2 inline-block translate-x-12 md:translate-x-0 lg:translate-x-0">X</div>
           }
            
        </div>

        {/* Cart Items*/}
        <div className="overflow-y-scroll px-4 ">
           <div className="flex justify-center items-center gap-4 mb-8">
            <CartIcon/> <h1 className="font-bold text-white text-xl">Cart</h1>
           </div>
           
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
        </div>
        <div className="checkout w-full h-48 absolute bottom-0  bg-gray-800 text-white px-4 flex flex-col justify-between py-4">
            <div className="flex justify-between items-center py-4">
                <h1 className="uppercase font-normal text-xl text-gray-500">Subtotal</h1>
                <div className="flex flex-col">
                    <h2 className="text-amber-400 text-2xl self-end">$ 13.25</h2>
                    <h3 className="uppercase font-normal text-xl text-gray-500">or up to 9 x $ 12.3</h3>
                </div>
            </div>
            <button className="w-full bg-gray-900 p-4 rounded-md">Checkout</button>
        </div>
        
    </div>
  )
}

export default Cart