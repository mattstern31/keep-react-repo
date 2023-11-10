'use client'
import { Button } from '~/src'

const KeepButtonColor = () => {
  return (
    <div className="flex h-20 flex-wrap items-center gap-2 p-4">
      <Button size="md" color="error">
        Error Button
      </Button>
      <Button size="md" color="success">
        Success Button
      </Button>
      <Button size="md" color="info">
        Info Button
      </Button>
      <Button size="md" color="warning">
        warning Button
      </Button>
    </div>
  )
}

const KeepButtonColorCode = `
"use client";
import { Button } from "keep-react";

export const ButtonComponent = () => {
  return (
    <>
      <Button size="md" color="error">Error Button</Button>
      <Button size="md" color="success">Success Button</Button>
      <Button size="md" color="info">Info Button</Button>
      <Button size="md" color="warning">Warning Button</Button>
    </>
  );
};
`

export { KeepButtonColor, KeepButtonColorCode }
