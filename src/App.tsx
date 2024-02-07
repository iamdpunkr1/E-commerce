
import './App.css'
import Products from './components/Products'
import Sizes from './components/Sizes'

function App() {

  return (
    <main className='max-w-[1200px] mx-auto my-28 p-4'>
      <div className='flex justify-center flex-wrap md:flex-nowrap lg:flex-nowrap gap-4'>
        <Sizes/>
        <Products/>
      </div>
    </main>
  )
}

export default App
