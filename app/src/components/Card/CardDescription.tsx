import type { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

/**
 * Props for the CardDescription component.
 * @interface CardDescriptionProps
 */
export interface CardDescriptionProps {
  /**
   * The content of the CardDescription component.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * Additional CSS class name for styling.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const CardDescription: FC<CardDescriptionProps> = ({ children, className }) => {
  const theme = useTheme().theme.card.description
  return <p className={cn(theme, className)}>{children}</p>
}
