import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useAccordionContext } from './AccordionPanelContext'
import { useTheme } from '../../Keep/ThemeContext'
import { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { Collapse } from 'react-collapse'
import { cn } from '../../helpers/cn'

export interface keepAccordionComponentTheme {
  base: string
}

export interface AccordionContentProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<keepAccordionComponentTheme>
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen = false } = useAccordionContext()

  const oldTheme = useTheme().theme.accordion.content
  const theme = mergeDeep(oldTheme, customTheme)
  return (
    <Collapse isOpened={isOpen}>
      <div className={cn(theme.base, className)} data-testid="keep-accordion-content" hidden={!isOpen} {...props}>
        {children}
      </div>
    </Collapse>
  )
}
