'use client'
import { Tree } from '~/src'
import { nodes } from './DefaultTree'

const TreeWithCheckbox = () => {
  const handleChecked = (value: boolean) => {
    console.log(value)
  }
  return (
    <div className="overflow-x-auto py-5">
      <Tree showCheckbox={true} showItemsNumber={true} showBorder={true} nodes={nodes} handleChecked={handleChecked} />
    </div>
  )
}

const TreeWithCheckboxCode = `
"use client";
import { Tree } from "keep-react";
const nodes = [
  {
    id: 1,
    title: "Home Page",
    children: [
      {
        id: 2,
        title: "Hero Section",
        children: [
          {
            id: 2.1,
            title: "Hero Image",
            children: [
              {
                id: 2.2,
                title: "Hero Text",
                children: [
                  { id: 2.3, title: "Heading / Tag line" },
                  { id: 2.4, title: "Sub Heading Line" },
                  { id: 2.5, title: "Description Text" },
                ],
              },
            ],
          },
          {
            id: 2.6,
            title: "Contact Page",
            children: [
              {
                id: 2.7,
                title: "Social Media",
                children: [{ id: 2.8, title: "Facebook" }],
              },
            ],
          },
        ],
      },
      {
        id: 4.3,
        title: "Blog Page",
        children: [{ id: 412, title: "Blog Category" }],
      },
    ],
  },
  {
    id: 123,
    title: "Footer Component",
    children: [
      { id: 1231, title: "Footer Logo" },
      { id: 1232, title: "Quick Links" },
    ],
  },
];

export const TreeComponent = () => {
  return (
    <Tree
      showCheckbox={true}
      showItemsNumber={true}
      showBorder={true}
      nodes={nodes}
    />
  );
}
`

export { TreeWithCheckbox, TreeWithCheckboxCode }
