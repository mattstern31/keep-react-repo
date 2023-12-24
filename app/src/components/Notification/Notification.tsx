'use client'
import { FC, ReactNode } from 'react'
import { X } from 'phosphor-react'

import { Body } from './Body'
import { Icon } from './Icon'
import { Media } from './Media'
import { Title } from './Title'
import { Avatar } from './Avatar'
import { Container } from './Container'
import { Description } from './Description'

import { cn } from '../../helpers/cn'

import { useTheme } from '../../Keep/ThemeContext'

/**
 * Props for the Notification component.
 * @interface NotificationProps
 */
export interface NotificationProps {
  /**
   * The content of the Notification.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode
  /**
   * Additional class name for the Notification.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * The position of the Notification.
   * @type {'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'}
   * @default 'top-right'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /**
   * Callback function to be called when the Notification is dismissed.
   * If set to `true`, the Notification will be dismissed automatically.
   * @type {boolean | (() => void)}
   * @default false
   */
  onDismiss?: boolean | (() => void)
  /**
   * Determines whether the Notification can be dismissed.
   * @type {boolean}
   * @default false
   */
  dismiss?: boolean
}

export interface keepNotificationTheme {
  root: string
  position: {
    show: string
    hidden: string
    'top-left': string
    'top-right': string
    'bottom-left': string
    'bottom-right': string
  }
  crossBtn: string
  description: string
  media: string
  icon: string
  body: string
  avatar: string
  title: string
}

const NotificationComponent: FC<NotificationProps> = ({
  className,
  children,
  position = 'top-right',
  dismiss = false,
  onDismiss,
}) => {
  const { root, crossBtn, position: positionStyle } = useTheme().theme.notification
  return (
    <div className={cn(dismiss ? positionStyle.hidden : positionStyle.show, positionStyle[position])}>
      <div className={cn(root, className)}>
        {onDismiss && typeof onDismiss === 'function' && (
          <button className={crossBtn} onClick={() => onDismiss()}>
            <X size="20" color="#222" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

Icon.displayName = 'Notification.Icon'
Avatar.displayName = 'Notification.Avatar'
Media.displayName = 'Notification.Media'
Description.displayName = 'Notification.Description'
Title.displayName = 'Notification.Title'
Body.displayName = 'Notification.Body'
Container.displayName = 'Notification.Container'

export const Notification = Object.assign(NotificationComponent, {
  Icon,
  Avatar,
  Media,
  Description,
  Title,
  Body,
  Container,
})
