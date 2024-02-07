import Product from "../partials/Product"

const Products = () => {
  return (
    <section className="w-full ">
        <h1 className="pb-6">16 Product(s) found</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </section>
  )
}

export default Products