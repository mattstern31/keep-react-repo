import { Space_Mono } from 'next/font/google'
import React, { FC } from 'react'

interface ComponentApiProps {
  id: number
  propsName: string
  propsDescription: string
  default?: string
  propsType: string | string[]
}

interface ComponentProps {
  data: ComponentApiProps[]
}

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400'] })

const ComponentApi: FC<ComponentProps> = ({ data }) => {
  return (
    <div className={spaceMono.className + ' mx-auto w-full overflow-auto '}>
      <table className="whitespace-no-wrap z-50 mt-10 min-w-max table-auto border border-slate-100 bg-white text-left md:w-full lg:min-w-min">
        <thead>
          <tr>
            <th className="rounded-bl rounded-tl bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Property
            </th>
            <th className="bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Description
            </th>
            <th className="rounded-br rounded-tr bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Type
            </th>
            <th className="rounded-br rounded-tr bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border-t border-slate-100 px-4 py-3 text-sm !font-medium leading-[22px] tracking-[-0.3px] text-black">
                  {item.propsName}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px] text-slate-500">
                  {item.propsDescription}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px] text-pink-400">
                  {typeof item.propsType === 'string'
                    ? item.propsType
                    : item.propsType.map((prop) => (
                        <pre key={prop} className="m-0.5 inline-block rounded bg-slate-100 px-2 py-0.5 ">
                          {prop}
                        </pre>
                      ))}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px] text-slate-500">
                  {item.default ? item.default : 'None'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ComponentApi
