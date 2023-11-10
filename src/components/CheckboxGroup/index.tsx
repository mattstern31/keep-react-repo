/* eslint-disable @next/next/no-img-element */
import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'
import { FC } from 'react'

import { Avatar } from '../Avatar/Avatar'
import { useTheme } from '../../Keep/ThemeContex'
import { Radio } from '../FormControls/Radio'

interface CheckboxGroupProps {
  checkboxType?: 'square' | 'circle'
  checkboxPosition?: 'left' | 'right'
  title: string
  description?: string
  icon?: ReactNode
  img?: string
  imgShape?: 'square' | 'circle'
  fieldName?: string
  select?: 'single' | 'multiple'
  value?: string
  selected?: string
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface keepCheckboxGroupTheme {
  label: {
    base: string
    iconRight: {
      on: string
      off: string
    }
    selected: {
      on: string
      off: string
    }
    spacing: string
  }

  main: {
    order: string
    spacing: string
  }
  root: {
    base: string
    icon: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    circleImg: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    squareImg: {
      base: string
      img: string
    }
  }
  textBox: {
    spacing: string
    order: string
    title: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    description: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
  }
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  checkboxType = 'square',
  title,
  description,
  checkboxPosition = 'left',
  icon,
  img,
  imgShape = 'circle',
  fieldName,
  value = '',
  selected,
  onOptionChange,
}) => {
  const theme = useTheme().theme.checkboxGroup
  return (
    <label
      className={twMerge(
        theme.label.base,
        checkboxPosition === 'right' || icon || img ? theme.label.iconRight.on : theme.label.iconRight.off,
        selected === value ? theme.label.selected.on : theme.label.selected.off,
        imgShape === 'circle' && theme.label.spacing,
      )}>
      <div
        className={twMerge(
          checkboxPosition === 'right' || icon || img ? theme.main.order : '',
          imgShape === 'square' && theme.main.spacing,
        )}>
        <Radio
          sizing="lg"
          name={fieldName}
          radioShape={checkboxType}
          value={value}
          selected={selected}
          onOptionChange={onOptionChange}
        />
      </div>
      <div className={twMerge(theme.root.base)}>
        {!img && typeof icon !== 'undefined' && (
          <div
            className={twMerge(
              selected === value ? theme.root.icon.selected.on : theme.root.icon.selected.off,
              theme.root.icon.base,
            )}>
            {icon}
          </div>
        )}
        {img && imgShape === 'circle' && (
          <div
            className={twMerge(
              theme.root.circleImg.base,
              selected === value ? theme.root.circleImg.selected.on : theme.root.circleImg.selected.off,
            )}>
            <Avatar img={img} shape="circle" />
          </div>
        )}
        {img && imgShape === 'square' && (
          <div className={twMerge(theme.root.squareImg.base)}>
            <img src={img} alt="checkbox" className={twMerge(theme.root.squareImg.img)} />
          </div>
        )}

        <div
          className={twMerge(
            imgShape === 'square' && theme.textBox.spacing,
            checkboxPosition === 'right' ? theme.textBox.order : '',
          )}>
          {title && (
            <p
              className={twMerge(
                theme.textBox.title.base,
                selected === value ? theme.textBox.title.selected.on : theme.textBox.title.selected.off,
              )}>
              {title}
            </p>
          )}

          {description && (
            <p
              className={twMerge(
                theme.textBox.description.base,
                selected === value ? theme.textBox.description.selected.on : theme.textBox.description.selected.off,
              )}>
              {description}
            </p>
          )}
        </div>
      </div>
    </label>
  )
}
