export const formatCOP = (value) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)

export const formatPhoneDigits = (phone) => phone.replace(/\D/g, '')

export const isValidColombianPhone = (phone) => {
  const digits = formatPhoneDigits(phone)
  return digits.length === 10 && digits.startsWith('3')
}
