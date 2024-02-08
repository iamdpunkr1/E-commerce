import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext";

type SizeProps = {
    size:string
}

const SizeButtons = ({size}: SizeProps) => {
  const [active, setActive] = useState<boolean>(false);
  const {sizes, setSizes} = useContext(ProductContext);
  // console.log(sizes)
  const handleClick = () => {
    if(active) setSizes(sizes.filter(s => s!==size))
    else setSizes([...sizes, size])
    setActive(!active);
  }
  return (
    <div onClick={handleClick} className={`w-8 h-8  text-[11px] font-light rounded-full flex justify-center
     items-center border border-gray-200 hover:border-black cursor-pointer ${active? "bg-black border-black text-white":"bg-gray-200 border-gray-200"}`}>
        {size}
    </div>
  )
}

export default SizeButtons