import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  title: 'components/CustomButton',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    text: 'Primary',
  },
};

export const BorderLight: Story = {
  args: {
    theme: 'border-light',
    text: 'Border light',
  },
};

export const ButtonIcon: Story = {
  args: {
    text: 'Button Icon',
    icon: <img src="assets/home.svg" className="h-4 w-4" alt="" />,
  },
};

export const ButtonIconRight: Story = {
  args: {
    text: 'Button Icon Right',
    icon: <img src="assets/home.svg" className="h-4 w-4" alt="" />,
    iconPosition: 'right',
  },
};

export const ButtonLoader: Story = {
  args: {
    text: 'Button loader',
    loading: true,
  },
};

export const Playground: Story = {
  args: {
    text: 'Custom button',
    icon: <img src="assets/home.svg" className="h-3 w-3" alt="" />,
  },
  argTypes: {
    text: {
      control: 'text',
      // icon: <img src="assets/home.svg" className="h-3 w-3" alt="" />,
    },
    theme: {
      control: 'inline-radio',
      options: ['default', 'primary', 'border-light'],
    },
    icon: {
      control: 'select',
      options: ['', <img src="assets/home.svg" className="h-3 w-3" alt="" />],
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to CustomButton!/gi)).toBeTruthy();
//   },
// };
