import cx from 'classnames'
import { ChangeEvent } from 'react'

export interface InputProps {
  type: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

const Input = ({ type, onChange, placeholder, className }: InputProps) => {
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
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
