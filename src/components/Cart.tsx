
import { useState } from "react";

const Cart = () => {
  const [show, setShow] = useState(false);


  return (
    <div className={`absolute w-full h-full md:w-[450px] lg:w-[450px] bg-gray-800 top-0 right-0 transition all duration-300 ease-in ${show?"translate-x-0":"translate-x-full"}`}>
        <div onClick={()=> setShow(!show)} className=" bg-gray-800 py-2 px-2 text-white relative top-0 -left-12 cursor-pointer">
           
           {
            !show ? 
            <>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                    d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                    stroke="#ffffff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />{" "}
                </g>
            </svg>
            <div className="absolute top-7 left-7 rounded-full w-5 h-5 flex justify-center items-center text-[11px] font-semibold text-black bg-amber-400 inline-block">
                2
            </div>
            </>: <div className="font-semibold hover:bg-slate-900 px-2 inline-block translate-x-12 md:translate-x-0 lg:translate-x-0">X</div>
           }
            
        </div>
    </div>
  )
}

export default Cart