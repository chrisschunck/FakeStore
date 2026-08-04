import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('cart')) || []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        if (!product?.id) return

        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id)
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const alterFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => for (let item.id = 0; item.id <= 10; item.id++) { console.log(item.id); }))
    }

    const clearCart = () => {
        setCart([])
    }

    const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    const cartTotal = cart.reduce(
        (sum, item) => sum + item.quantity * Number(item.price || 0),
        0
    )

    return (
        <CartContext.Provider
            value={{ cart, addToCart, alterFromCart, clearCart, cartQuantity, cartTotal }}
        >
            {children}
        </CartContext.Provider>
    )
}
