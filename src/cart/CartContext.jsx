import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { COMBOS } from '../data/combos'
import { getOrderDetails, matchCombo } from '../lib/order'

const STORAGE_KEY = 'botane-cart'

const CartContext = React.createContext(null)
export const useCartContext = () => React.useContext(CartContext)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
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

  const addComboProducts = useCallback((combo, resolveProduct) => {
    const items = combo.productIds.map(resolveProduct).filter(Boolean)
    setCart((current) => {
      const map = new Map(current.map((item) => [item.id, item]))
      items.forEach((product) => {
        map.set(product.id, { ...product, quantity: 1 })
      })
      return [...map.values()]
    })
  }, [])

  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const order = useMemo(() => getOrderDetails({ cart, combos: COMBOS }), [cart])
  const activeCombo = matchCombo(cart, COMBOS)

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      changeQuantity,
      removeFromCart,
      clearCart,
      addComboProducts,
      itemsCount,
      order,
      subtotal: order.subtotal,
      total: order.total,
      discount: order.discount,
      combo: activeCombo,
      shipping: 0,
      shippingLabel: 'Envío gratis',
    }),
    [cart, addToCart, changeQuantity, removeFromCart, clearCart, addComboProducts, itemsCount, order, activeCombo],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
