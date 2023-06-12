import cx from 'classnames'
import { ChangeEvent, MouseEvent } from 'react'

export interface InputProps {
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

const Input = ({ value, onChange, onClick, placeholder, className }: InputProps) => {
  return (
    <input
      className={cx(
        className,
        'focus:outline-none',
        'focus:border-black',
        'border-2',
        'rounded-sm',
        'border-gray-300',
      )}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
    />
  )
}

export default Input
