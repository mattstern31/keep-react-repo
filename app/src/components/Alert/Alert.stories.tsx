import { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'
import { CheckCircle, Info, WarningCircle, X, XCircle } from 'phosphor-react'
import { Alert } from '.'
import { removeFragment } from '../../helpers/mergeDeep'

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'metal'],
      table: {
        type: { summary: 'primary | success | warning | error | metal' },
        defaultValue: { summary: 'primary' },
      },
      description: 'What background color to use like',
    },
    rounded: { description: 'Adds rounded corners to the alert.', control: { type: 'boolean' } },
    dismiss: { description: 'Enables or disables the dismiss icon.', control: { type: 'boolean' } },
    withBorder: { description: 'Adds a border around the alert.', control: { type: 'boolean' } },
    withBorderAccent: { description: 'Adds a border accent to the alert.', control: { type: 'boolean' } },
    withBorderAccentPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'What is the border accent position color to use like',
      table: {
        type: { summary: 'left | right | top | bottom' },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
    onDismiss: {
      control: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const DefaultAlert: Story = {
  args: {
    color: 'primary',
    rounded: false,
    withBorder: false,
    withBorderAccent: false,
    withBorderAccentPosition: 'left',
    dismiss: false,
    icon: <X size={24} />,
    children: removeFragment(
      <>
        <Alert.Container>
          <Alert.Icon>
            <Info size={24} />
          </Alert.Icon>
          <Alert.Body>
            <Alert.Title>Default message - make it short</Alert.Title>
            <Alert.Description>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
              <Link href="/alert" className="ml-1 inline-block text-body-4 text-primary-600 underline">
                Link style
              </Link>
            </Alert.Description>
          </Alert.Body>
        </Alert.Container>
      </>,
    ),
  },
}
export const RoundedAlert: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
  },
}
export const AlertWithBorder: Story = {
  args: {
    ...DefaultAlert.args,
    rounded: true,
    withBorder: true,
  },
}
export const AlertWithAccentBorder: Story = {
  args: {
    ...DefaultAlert.args,
    withBorderAccent: true,
  },
}
export const InfoAlert: Story = {
  args: {
    ...DefaultAlert.args,
  },
}
export const GrayAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'metal',
    icon: <Info size={24} color="gray" />,
  },
}
export const ErrorAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'error',
    icon: <XCircle size={24} color="#E92215" />,
  },
}
export const SuccessAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'success',
    icon: <CheckCircle size={24} color="#0A9952" />,
  },
}
export const WarningAlert: Story = {
  args: {
    ...DefaultAlert.args,
    color: 'warning',
    icon: <WarningCircle size={24} color="#D8A800" />,
  },
}
export const CustomAlert: Story = {
  args: {
    className: 'rounded-lg bg-slate-900',
    children: removeFragment(
      <>
        <Alert.Container>
          <Alert.Icon>
            <Info size={24} color="#fff" />
          </Alert.Icon>
          <Alert.Body>
            <Alert.Title className="text-white">Default message - make it short</Alert.Title>
            <Alert.Description className="text-gray-400">
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry
              <Link href="/alert" className="ml-1 inline-block text-body-4 text-primary-600 underline">
                Link style
              </Link>
            </Alert.Description>
          </Alert.Body>
        </Alert.Container>
      </>,
    ),
  },
}
