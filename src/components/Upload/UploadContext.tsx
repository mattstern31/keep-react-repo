import { ReactNode, createContext, useContext } from 'react'
import { ButtonTypes } from '../Button/Button'

export type UploadContext = {
  id?: string
  progress: number
  uploadTime?: string
  file?: string
  disabled?: boolean
  showProgressBar?: boolean
  progressType?: 'success' | 'error' | 'pending'
  title?: string
  fileType?: string
  icon?: ReactNode
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  uploadBtnType?: keyof ButtonTypes
}

export const UploadContext = createContext<UploadContext | undefined>(undefined)

export function useUploadContext(): UploadContext {
  const context = useContext(UploadContext)

  if (!context) {
    throw new Error('useUploadContext should be used within the UploadContext provider!')
  }

  return context
}
