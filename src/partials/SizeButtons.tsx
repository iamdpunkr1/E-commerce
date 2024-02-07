type SizeProps = {
    size:string
}

const SizeButtons = ({size}: SizeProps) => {
  return (
    <div className='w-8 h-8 bg-gray-200 text-[11px] font-light rounded-full flex justify-center items-center border border-gray-200 hover:border-black cursor-pointer'>
        {size}
    </div>
  )
}

export default SizeButtons