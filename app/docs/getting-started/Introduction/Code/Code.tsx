const twConfig = `
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
};
`
const twCss = `
  @import "keep-react/css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `
const reactCodeString = `
  import { Button } from "keep-react";
  const App=()=>{
    return (
      <Button size="md">Default</Button>
    )
  }
export default App;
  `

const nextCodeString = `
"use client";
import { Button } from "keep-react";
const App=()=>{
  return (
    <Button size="md">Default</Button>
  )
};
export default App;
  `
const twNpmInstall = 'npm i autoprefixer postcss tailwindcss\nnpx tailwindcss init -p'

const keepNpmInstall = 'npm i keep-react'
const keepPnpmInstall = 'pnpm add keep-react'
const keepYarnInstall = 'yarn add keep-react'

const twConfigForNextJs = `
module.exports = {
  content: [
    // ... (existing content)
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("keep-react/preset")],
};
`
const viteReact = `
npm create vite@latest my-project -- --template react
cd my-project
`

const nextJsInstall = `npx create-next-app@latest`

const NextJsQnA = () => {
  return (
    <div className="my-5">
      <ul className="-space-y-0 rounded-md bg-metal-50 px-4 py-3 text-body-5 text-metal-700">
        <li>Would you like to use Tailwind CSS? Yes</li>
      </ul>
    </div>
  )
}

export {
  twConfig,
  twCss,
  reactCodeString,
  nextCodeString,
  twNpmInstall,
  keepNpmInstall,
  twConfigForNextJs,
  keepYarnInstall,
  viteReact,
  nextJsInstall,
  NextJsQnA,
  keepPnpmInstall,
}
