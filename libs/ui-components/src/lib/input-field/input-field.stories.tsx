import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './input-field';

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'components/InputField',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
    type: {
      control: 'inline-radio',
      options: ['text', 'textarea', 'select', 'radio', 'checkbox'],
    },
    isInvalid: {
      control: 'boolean',
    },
  },
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Playground: Story = {
  args: {
    width: 300,
    label: 'Email',
    placeholder: 'Enter email here',
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to InputField!/gi)).toBeTruthy();
//   },
// };
