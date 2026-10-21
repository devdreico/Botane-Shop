import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getOrderDetails } from '../lib/order'

const STORAGE_KEY = 'botane-cart'

const LEGACY_FIELDS = ['mpLink', 'combo', 'comboId', 'discountPct']

const CartContext = React.createContext(null)
export const useCartContext = () => React.useContext(CartContext)

function sanitizeCart(raw) {
  if (!Array.isArray(raw)) return []
  return raw
    .filter(
      (item) =>
        item &&
        typeof item.id === 'string' &&
        typeof item.price === 'number' &&
        Number.isFinite(item.quantity),
    )
    .map((item) => {
      const clean = { ...item }
      LEGACY_FIELDS.forEach((field) => delete clean[field])
      return { ...clean, quantity: Math.max(1, Math.floor(item.quantity)) }
    })
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return sanitizeCart(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = useCallback((product, quantity = 1) => {
    setCart((current) => {
      const item = current.find((entry) => entry.id === product.id)
      if (item) {
        return current.map((entry) => (entry.id === product.id ? { ...entry, quantity: entry.quantity + quantity } : entry))
      }
      return [...current, { ...product, quantity }]
    })
  }, [])

  const changeQuantity = useCallback((id, delta) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const order = useMemo(() => getOrderDetails({ cart }), [cart])

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      changeQuantity,
      removeFromCart,
      clearCart,
      itemsCount,
      order,
      subtotal: order.subtotal,
      total: order.total,
      discount: order.discount,
      shipping: 0,
      shippingLabel: 'Envío gratis',
    }),
    [cart, addToCart, changeQuantity, removeFromCart, clearCart, itemsCount, order],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
