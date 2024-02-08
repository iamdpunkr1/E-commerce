import { ReactNode, createContext, useState, useEffect } from "react";

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

type TotalState = {
    totalPrice: number;
    totalInstallments: number;
    totalQuantities: number;
};

type CartContextProps = {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    cartItems: CartProduct[];
    setCartItems: (cartItem: CartProduct[]) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    deleteCartItem: (id: number) => void;
    total: TotalState;
};

export const CartContext = createContext({} as CartContextProps);

const CartContextProvider = ({ children }: ChildProps) => {
    const [cartItems, setCartItems] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [total, setTotal] = useState<TotalState>({ totalPrice: 0, totalInstallments: 0, totalQuantities: 0 });

    useEffect(() => {
        // Calculate total price, total installments, and total quantities when cart items change
        let totalPrice = 0;
        let totalInstallments = 0;
        let totalQuantities = 0;

        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
            totalInstallments = Math.max(item.installments,totalInstallments);
            totalQuantities += item.quantity;
        });

        setTotal({ totalPrice, totalInstallments, totalQuantities });
    }, [cartItems]);

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

    const deleteCartItem = (id: number) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, isOpen, setIsOpen, increaseQuantity, decreaseQuantity, deleteCartItem, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
