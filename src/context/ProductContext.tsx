import { ReactNode, createContext, useEffect, useState } from "react";

export interface IProduct {
    id: number;
    sku: number;
    title: string;
    description: string;
    availableSizes: string[];
    style: string;
    price: number;
    installments: number;
    currencyId: string;
    currencyFormat: string;
    isFreeShipping: boolean;
  }


type ChildProps = {
    children: ReactNode
}

type ProductContextProps = {
    // products: IProduct[],
    filteredProducts: IProduct[],
    loading : boolean,
    error: string,
    sizes: string[],
    setSizes:(sizes: string[])=> void
}


export const ProductContext = createContext({} as ProductContextProps)

const ProductContextProvider = ({children}: ChildProps) =>{ 
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("")
    const [sizes, setSizes] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

    useEffect(()=>{
        const fetchProducts = async () => {
            setLoading(true);
            try{
                const res = await fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
                const data = await res.json();
                setProducts(data.products);
                setError("");
            }catch(err){
                console.log(err);
                setError("SomeError Occured")
            }

            setLoading(false);
        }

        fetchProducts();
    },[])

    useEffect(() => {

        const filterFunction = () => {
            setLoading(true);
            if (sizes.length > 0) {
                
                // console.log("products:", products);
                const filterProducts = products.filter(p =>
                    sizes.some(s => p.availableSizes.includes(s))
                );
                // console.log(filterProducts);
                setFilteredProducts(filterProducts);
                
                 // You need to set the filtered products state
            } else {
                setLoading(true);
                // console.log("NOT FOUND");
                setFilteredProducts([...products]); // Reset filtered products when sizes array is empty
            }
            setLoading(false);
        }

        filterFunction();

    }, [sizes, products]);
    

    return (
        <ProductContext.Provider value={{filteredProducts, loading, error, sizes, setSizes}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider