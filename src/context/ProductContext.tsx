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
    products: IProduct[],
    loading : boolean,
    error: string
}
export const ProductContext = createContext({} as ProductContextProps)

const ProductContextProvider = ({children}: ChildProps) =>{ 
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("")

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

    return (
        <ProductContext.Provider value={{products, loading, error}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider