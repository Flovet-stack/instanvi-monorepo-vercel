import type { Meta, StoryObj } from '@storybook/react';
import { RequestActionTimer } from './request-action-timer';

const meta: Meta<typeof RequestActionTimer> = {
  component: RequestActionTimer,
  title: 'components/RequestActionTimer',
};
export default meta;
type Story = StoryObj<typeof RequestActionTimer>;

export const Primary: Story = {
  args: {
    expirationTime: 200,
    keyName: 'testExpiresTime',
    onTimerEnd: (isExpired) => {
      console.log(
        '🚀 ~ file: request-action-timer.stories.tsx:18 ~ export  Primary: Story.args.isExpired:',
        isExpired
      );
    },
  },
};
