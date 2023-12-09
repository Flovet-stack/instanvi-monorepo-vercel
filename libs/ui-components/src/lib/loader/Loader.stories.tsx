import type { Meta, StoryObj } from '@storybook/react';
import { AppLoader } from './Loader';

const spinnerTypes = [
  'SpinnerCircular',
  'SpinnerCircularFixed',
  'SpinnerCircularSplit',
  'SpinnerDiamond',
  'SpinnerDotted',
  'SpinnerInfinity',
  'SpinnerRomb',
  'SpinnerRound',
  'SpinnerRoundFilled',
  'SpinnerRoundOutlined',
];

const meta: Meta<typeof AppLoader> = {
  component: AppLoader,
  title: 'components/AppLoader',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof AppLoader>;

export const Default: Story = {
  args: {},
};

export const LoaderWithText: Story = {
  args: {
    text: 'Loading',
  },
};

export const Playground: Story = {
  args: {
    color: '#065e0c',
  },
  argTypes: {
    text: {
      control: 'text',
    },
    size: {
      control: 'range',
    },
    type: {
      control: 'select',
      options: spinnerTypes,
    },
    color: {
      control: 'text',
      defaultValue: '#065e0c',
    },
  },
};
