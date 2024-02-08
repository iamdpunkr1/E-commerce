import { useState } from "react"

type SizeProps = {
    size:string
}

const SizeButtons = ({size}: SizeProps) => {
  const [active, setActive] = useState<boolean>(false);
  
  return (
    <div onClick={()=> setActive(!active)} className={`w-8 h-8  text-[11px] font-light rounded-full flex justify-center
     items-center border border-gray-200 hover:border-black cursor-pointer ${active? "bg-black border-black text-white":"bg-gray-200 border-gray-200"}`}>
        {size}
    </div>
  )
}

export default SizeButtons