'use client'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { FC, createElement, forwardRef, useState } from 'react'
import YearPick from 'react-datepicker'
import { useDatePickerContext } from './DatePickerContext'
import { CustomInput } from './CustomInput'

export const YearPicker: FC = () => {
  const { year, placeholder } = useDatePickerContext()
  const [startDate, setStartDate] = useState<Date | null>(null)
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date)
      const newYear = new Date(date).getFullYear()
      year && year(newYear)
    }
  }

  return (
    <YearPick
      placeholderText={placeholder}
      selected={startDate}
      onChange={handleDateChange}
      showYearPicker
      dateFormat="yyyy"
      customInput={createElement(forwardRef(CustomInput))}
      showPopperArrow={false}
      renderCustomHeader={({ date, decreaseYear, increaseYear, customHeaderCount }) => {
        const year = date.getFullYear()
        return (
          <div className="flex items-center justify-between px-5 pt-3">
            <button
              aria-label="Previous Month"
              className={customHeaderCount === 1 ? 'hidden' : ''}
              onClick={decreaseYear}>
              <span>
                <CaretLeft size={18} color="#5E718D" weight="thin" />
              </span>
            </button>
            <p className="text-body-4 font-semibold text-metal-800">{year}</p>
            <button aria-label="Next Month" className={customHeaderCount === 1 ? 'hidden' : ''} onClick={increaseYear}>
              <CaretRight size={18} color="#5E718D" weight="thin" />
            </button>
          </div>
        )
      }}
    />
  )
}
