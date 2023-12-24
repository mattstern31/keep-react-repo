import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { Children, cloneElement, useMemo } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContext'
import type { ButtonProps } from './Button'
import { cn } from '../../helpers/cn'

export interface keepButtonGroupTheme {
  base: string
  position: PositionInButtonGroup
}

/**
 * Props for the ButtonGroup component.
 * @typedef {Object} ButtonGroupProps
 * @extends {ComponentProps<'div'>}
 */
export type ButtonGroupProps = PropsWithChildren<ComponentProps<'div'> & Pick<ButtonProps, 'pill'>>

export interface PositionInButtonGroup {
  none: string
  start: string
  middle: string
  end: string
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, pill, className, ...props }): ReactElement => {
  const theirProps = excludeClassName(props)

  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          pill,
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children, pill],
  )
  const theme = useTheme().theme.buttonGroup

  return (
    <div className={cn(theme.base, className)} role="group" {...theirProps}>
      {items}
    </div>
  )
}

ButtonGroup.displayName = 'Button.Group'
