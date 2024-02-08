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
    children: ReactNode;
}

type CartContextProps = {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    cartItems: CartProduct[];
    setCartItems: (cartItem: CartProduct[]) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
};

export const CartContext = createContext({} as CartContextProps);

const CartContextProvider = ({ children }: ChildProps) => {
    const [cartItems, setCartItems] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const increaseQuantity = (id: number) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (id: number) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, isOpen, setIsOpen, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
