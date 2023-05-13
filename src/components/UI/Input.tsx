import cx from 'classnames'
import { ChangeEvent } from 'react'

export interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

const Input = ({ value, onChange, placeholder, className }: InputProps) => {
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
      placeholder={placeholder}
    />
  )
}

export default Input
