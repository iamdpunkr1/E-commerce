import SizeButtons from "../partials/SizeButtons"

const arr: string[] = ["XS", "S", "M", "L", "XL", "XXL"]

const Sizes = () => {
  return (
    <aside className="mb-8">
          <h2 className='font-bold text-lg '>Sizes:</h2>
          <div className='flex flex-wrap gap-2 mt-4'>
             { arr.map((e,i)=>  <SizeButtons key={i} size={e}/>)}
          </div>
    </aside>
  )
}

export default Sizes