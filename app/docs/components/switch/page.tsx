import type { Metadata, NextPage } from 'next'
import { DocsContentLayout } from '~/components/DocsContentLayout'
import SwitchDocs from '.'

export const metadata: Metadata = {
  description:
    'The Toggle Switch component provides a user-friendly way to enable or disable a setting or feature. It presents a visual representation of two states, typically on and off, allowing users to easily toggle between them. The Toggle Switch component is highly versatile and can be integrated into various user interfaces to enhance user interactions and control options.',
  title: 'Switch - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <SwitchDocs />
    </DocsContentLayout>
  )
}

export default page
