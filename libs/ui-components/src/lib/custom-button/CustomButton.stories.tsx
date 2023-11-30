import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  title: 'CustomButton',
};
export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CustomButton!/gi)).toBeTruthy();
  },
};
