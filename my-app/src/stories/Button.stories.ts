import type { Meta, StoryObj } from '@storybook/react';
import { HelloWorld } from '../../registry/akeneo/pink-button/pink-button';

// Meta configuration for the HelloWorld component
const meta: Meta<typeof HelloWorld> = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

// Default HelloWorld story
export const Default: Story = {};

// A variant with centered text
export const CenteredButton: Story = {
  parameters: {
    layout: 'centered',
  },
};

// A variant for testing long text
export const LongTextButton: Story = {
  render: () => (
    <HelloWorld />
  ),
};

