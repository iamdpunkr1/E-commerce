
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import Sizes from './components/Sizes'

function App() {

  return (
    <main className='relative'>
      <div className='max-w-[1200px] mx-auto p-4 flex justify-center flex-wrap md:flex-nowrap lg:flex-nowrap gap-4 py-16'>
        <Sizes/>
        <Products/> 
      </div>
      <Cart/>
    </main>
  )
}

export default App
