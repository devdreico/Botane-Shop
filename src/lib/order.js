import { formatCOP } from './format'

export const getOrderDetails = ({ cart }) => {
  const items = cart
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return {
    items,
    subtotal,
    discount: 0,
    total: subtotal,
    shipping: 0,
    shippingLabel: 'Envío gratis',
  }
}

export const buildInvoice = ({ form, order, payment }) => {
  const { items, subtotal, total } = order
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
    'Envio: Gratis',
    `Metodo de pago: ${payment}`,
    `TOTAL: ${formatCOP(total)}`,
  ].join('\n')
}

export const buildFormspreePayload = ({ form, order, payment }) => {
  const { items, subtotal, total } = order
  const invoice = buildInvoice({ form, order, payment })
  return {
    nombre: form.nombre,
    telefono: `+57 ${form.telefono}`,
    ciudad_departamento: form.ciudad_departamento,
    direccion: form.direccion,
    metodo_pago: payment,
    productos: items.map((item) => `${item.name} x${item.quantity}`).join(' | '),
    subtotal: formatCOP(subtotal),
    descuento: formatCOP(0),
    total: formatCOP(total),
    envio: 'Envío gratis · entrega en menos de 5 días',
    invoice,
    _subject: `Nuevo pedido Botané — ${form.nombre}`,
    source: 'Tienda online Botané',
  }
}
