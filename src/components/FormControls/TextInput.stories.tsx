import type { Meta, StoryObj } from '@storybook/react'

import { Envelope, Lock, WarningCircle } from 'phosphor-react'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '2rem',
        }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'info', 'error', 'warning', 'success'],
      description: 'Specifies the color variant of the input text component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'gray' },
      },
    },
    withBg: {
      description: 'Applies a background style to the input text component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    border: {
      description: 'Displays a border around the input text component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    shadow: {
      description: 'Applies a shadow effect to the input text component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Placeholder' },
      },
      description: 'Input Field Placeholder text',
    },

    addonPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Specifies the position of the input text addon.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Specifies the position of the input text icon.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    sizing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Sets the size of the input text component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    helperText: {
      description: 'Additional helper text or information related to the input text.',
    },
    value: {
      description: 'Value of the input text field',
    },

    icon: {
      control: {
        disable: true,
      },
    },
    addon: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    componentSubtitle: 'TextInput is to allow users to enter textual information on a web page or web application.',
  },
}

export default meta
type Story = StoryObj<typeof TextInput>

export const DefaultTextInput: Story = {
  args: {
    placeholder: 'Default Input Field',
    color: 'gray',
    sizing: 'md',
    helperText: '',
    withBg: false,
    border: true,
    shadow: false,
    disabled: false,
  },
}
export const InputFieldWithIcon: Story = {
  args: {
    ...DefaultTextInput.args,
    placeholder: 'example@gmail.com',
    icon: <Envelope size={20} color="#5E718D" />,
    iconPosition: 'left',
  },
}
export const InputFieldWithIconRight: Story = {
  args: {
    ...InputFieldWithIcon.args,
    iconPosition: 'right',
  },
}
export const InputFieldWithAddon: Story = {
  args: {
    addon: <Envelope size={20} color="#5E718D" />,
    id: 'username',
    placeholder: 'example@gmail.com',
    addonPosition: 'left',
  },
}
export const InputFieldWithHint: Story = {
  args: {
    id: 'username',
    placeholder: 'password',
    type: 'password',
    addon: <Lock size={20} color="#5E718D" />,
    addonPosition: 'left',
    icon: <WarningCircle size={20} color="#5E718D" />,
    iconPosition: 'right',
    helperText: <span>Info that helps a user with this field.</span>,
  },
}
