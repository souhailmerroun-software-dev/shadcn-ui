import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HelloWorld } from '../../registry/akeneo/pink-button/pink-button';

// Storybook meta configuration
const meta = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Story
export const Default: Story = {
  args: {},
};
