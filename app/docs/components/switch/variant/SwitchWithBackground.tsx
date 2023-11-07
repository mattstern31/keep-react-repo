'use client'
import { Toggle } from '~/src'

const SwitchWithBackground = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Primary" size="md" />
      <Toggle bgColor="slate" label="Slate" size="md" />
    </div>
  )
}
const SwitchWithBackgroundCode = `
"use client";
import { Toggle } from "keep-react";

export const SwitchComponent = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Primary" size="md" />
      <Toggle bgColor="slate" label="Slate" size="md" />
    </div>
  );
}
`
export { SwitchWithBackground, SwitchWithBackgroundCode }
