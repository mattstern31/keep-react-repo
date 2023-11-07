'use client'
import { Toggle } from '~/src'

const SwitchSizes = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Small" size="sm" />
      <Toggle bgColor="primary" label="Medium" size="md" />
      <Toggle bgColor="primary" label="Large" size="lg" />
    </div>
  )
}

const SwitchSizesCode = `
"use client";
import { useState } from "react";
import { Toggle } from "keep-react";

export const SwitchComponent = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Small" size="sm" />
      <Toggle bgColor="primary" label="Medium" size="md" />
      <Toggle bgColor="primary" label="Large" size="lg" />
    </div>
  );
}
`

export { SwitchSizes, SwitchSizesCode }
