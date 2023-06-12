import React, { ReactNode } from 'react'
import cx from 'classnames'

export interface ModalProps {
  className?: string 
  children: ReactNode
  visible: boolean
  onClose: () => void
}

const Modal = ({ className, children, visible, onClose }: ModalProps) => {
  const handleOnCloseModal = () => {
    onClose()
  }

  if (!visible) return null

  return (
    <div
      className={cx(
        'fixed',
        'flex',
        'justify-center',
        'p-10',
        'inset-0',
        'bg-black',
        'bg-opacity-30',
        'backdrop-blur-sm',
      )}
      onClick={handleOnCloseModal}
    >
      <div
        className={cx(
          className,
          'flex',
          'flex-col',
          'justify-center',
          'h-min',
          'w-6/12',
          'rounded',
          'bg-white'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
