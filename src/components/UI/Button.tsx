import React, { ReactNode, MouseEvent } from 'react'
import cx from 'classnames'

export interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
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
