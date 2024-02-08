import { useContext } from "react"
import Product from "../partials/Product"
import {ProductContext} from "../context/ProductContext"

const Products = () => {
  const {filteredProducts, loading, error} = useContext(ProductContext)
 
  if(loading) return <div className="text-center text-xl">Loading...</div>
  if(error) return <div className="text-center text-xl text-red-500">{error}</div>

  return (
    <section className="w-full ">
        <h1 className="pb-6">{filteredProducts.length} Product(s) found</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
            {filteredProducts && filteredProducts.map(product => <Product key={product.id} {...product}/>)}
          
        </div>
    </section>
  )
}

export default Products