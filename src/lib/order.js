import { formatCOP } from './format'

export const matchCombo = (cart, combos) => {
  if (!cart.length) return null
  const cartIds = cart.map((item) => item.id).sort().join('|')
  return (
    combos.find((combo) => {
      const comboIds = [...combo.productIds].sort().join('|')
      const allOneQty = combo.productIds.every((id) => {
        const item = cart.find((entry) => entry.id === id)
        return item && item.quantity === 1
      })
      return cartIds === comboIds && allOneQty
    }) || null
  )
}

export const getOrderDetails = ({ cart, combos = [] }) => {
  const items = cart
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const combo = matchCombo(items, combos)
  const total = combo ? combo.price : subtotal
  return {
    items,
    subtotal,
    combo,
    discount: Math.max(0, subtotal - total),
    total,
    shipping: 0,
    shippingLabel: 'Envío gratis',
  }
}

export const buildInvoice = ({ form, order, payment }) => {
  const { items, subtotal, discount, total } = order
  const lines = items.map(
    (item) => `${item.quantity} x ${item.name} @ ${formatCOP(item.price)} = ${formatCOP(item.price * item.quantity)}`,
  )

  return [
    'FACTURA / PEDIDO BOTANE',
    `Cliente: ${form.nombre}`,
    `Telefono: +57 ${form.telefono}`,
    '',
    'DIRECCION DE ENTREGA',
    `Ciudad + Departamento: ${form.ciudad_departamento}`,
    `Direccion: ${form.direccion}`,
    '',
    'PRODUCTOS',
    ...lines,
    '',
    `Subtotal: ${formatCOP(subtotal)}`,
    ...(discount > 0 ? [`Descuento combo: -${formatCOP(discount)}`] : []),
    'Envio: Gratis',
    `Metodo de pago: ${payment}`,
    `TOTAL: ${formatCOP(total)}`,
  ].join('\n')
}

export const buildFormspreePayload = ({ form, order, payment }) => {
  const { items, subtotal, discount, total } = order
  const invoice = buildInvoice({ form, order, payment })
  return {
    nombre: form.nombre,
    telefono: `+57 ${form.telefono}`,
    ciudad_departamento: form.ciudad_departamento,
    direccion: form.direccion,
    metodo_pago: payment,
    productos: items.map((item) => `${item.name} x${item.quantity}`).join(' | '),
    subtotal: formatCOP(subtotal),
    descuento: discount > 0 ? formatCOP(discount) : formatCOP(0),
    total: formatCOP(total),
    envio: 'Envío gratis · entrega en menos de 5 días',
    combo: order.combo ? order.combo.label : 'No',
    invoice,
    _subject: `Nuevo pedido Botané — ${form.nombre}`,
    source: 'Tienda online Botané',
  }
}
