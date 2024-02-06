
const Sizes = () => {
  return (
    <aside>
          <h2 className='font-bold text-lg'>Sizes:</h2>
          <div className='flex flex-wrap gap-4 mt-4'>
            <div className='w-8 h-8 bg-gray-300 text-sm rounded-full flex justify-center items-center border border-gray-300 hover:border-black cursor-pointer'>S</div>
            <div className='w-8 h-8 bg-gray-300 text-sm rounded-full flex justify-center items-center'>M</div>
            <div className='w-8 h-8 bg-gray-300 text-sm rounded-full flex justify-center items-center'>L</div>
          </div>
    </aside>
  )
}

export default Sizes