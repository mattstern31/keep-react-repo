'use client'
import { Textarea } from '~/src'

const TextAreaWithOutBorder = () => {
  return <Textarea id="comment" placeholder="Leave a comment..." withBg={true} border={false} color="info" rows={4} />
}

const TextAreaWithOutBorderCode = `
"use client";
import { Textarea } from "keep-react";

export const TextAreaComponent = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="info"
      rows={4}
    />
  );
}
`

export { TextAreaWithOutBorder, TextAreaWithOutBorderCode }
