import React, { ReactNode } from 'react'
import cx from 'classnames'

export interface ButtonProps {
  text: string
  className?: string
  onClick: () => void
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        className,
        'px-8',
        'py-2',
        'border',
        'rounded-sm',
        'border-white',
        'text-white',
        'bg-black',
        'font-semibold',
        'hover:bg-gray-700',
        'hover:cursor-pointer',
      )}
    >
      {text}
    </div>
  )
}

export default Button
