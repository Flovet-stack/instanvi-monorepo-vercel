import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './input-field';

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'components/InputField',
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {},
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to InputField!/gi)).toBeTruthy();
//   },
// };
