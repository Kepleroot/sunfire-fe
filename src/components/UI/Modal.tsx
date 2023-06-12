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
        'items-start',
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
          'relative',
          'flex',
          'flex-col',
          'items-start',
          'w-6/12',
          'h-full',
          'rounded',
          'bg-white',
          'overflow-x-hidden',
          'overflow-y-scroll'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
