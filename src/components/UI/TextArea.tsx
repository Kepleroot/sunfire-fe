import cx from 'classnames'
import { ChangeEvent } from 'react'

export interface TextAreaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  className?: string
}

const TextArea = ({
  onChange,
  placeholder,
  className,
}: TextAreaProps) => {
  return (
    <textarea
      className={cx(
        className,
        'min-h-[25px]',
        'focus:outline-none',
        'focus:border-black',
        'border-2',
        'rounded-sm',
        'border-gray-300',
      )}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default TextArea
