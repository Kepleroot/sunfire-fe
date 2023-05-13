import cx from 'classnames'
import { ChangeEvent } from 'react'

export interface TextAreaProps {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  className?: string
}

const TextArea = ({
  value,
  onChange,
  placeholder,
  className,
}: TextAreaProps) => {
  return (
    <textarea
      className={cx(
        className,
        'min-h-[30px]',
        'h-80',
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

export default TextArea
