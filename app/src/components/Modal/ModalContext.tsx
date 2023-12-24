import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

/**
 * Represents the context for a modal component.
 * @typedef ModalContext
 */
type ModalPropsContext = {
  /**
   * The icon element to be rendered inside the Modal component.
   * @type {ReactNode}
   * @default null
   */
  icon?: ReactNode
  /**
   * Callback function to be called when the modal is closed.
   * @returns {void}
   * @type {() => void}
   */
  onClose?: () => void
}

export const ModalContext = createContext<ModalPropsContext | undefined>(undefined)

export function useModalContext(): ModalPropsContext {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext should be used within the ModalContext provider!')
  }

  return context
}
