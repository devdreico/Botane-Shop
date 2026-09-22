import { Check } from 'lucide-react'

export default function Toast({ message, count }) {
  if (!message) return null
  return (
    <div className="toast" role="status">
      <Check size={16} />
      {message}
      {typeof count === 'number' && (
        <span>
          · {count} {count === 1 ? 'producto' : 'productos'}
        </span>
      )}
    </div>
  )
}
