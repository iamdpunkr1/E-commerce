import { ReactNode, createContext, useState } from "react";

export interface CartProduct {
    id: number;
    sku: number;
    title: string;
    availableSizes: string[];
    style: string;
    price: number;
    installments: number;
    quantity: number;

  }


type ChildProps = {
    children: ReactNode
}

type CartContextProps = {
    isOpen: boolean,
    setIsOpen: (state:boolean) => void,
    cartItems: CartProduct[],
    setCartItems: (cartItem:CartProduct[]) => void

}


export const CartContext = createContext({} as CartContextProps)

const CartContextProvider = ({children}: ChildProps) =>{ 
    const [cartItems, setCartItems] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    console.log(cartItems)
    return (
        <CartContext.Provider value={{cartItems, setCartItems, isOpen, setIsOpen}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider