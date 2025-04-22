import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component with multiple variants',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'outline', 'ghost', 'subtle', 'surface', 'plain'],
      description: 'Вариант стилизации',
      table: {
        type: { summary: 'solid | outline | ghost | subtle | surface | plain' },
        defaultValue: { summary: 'solid' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Отключена ли кнопка',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pending: {
      control: { type: 'boolean' },
      description: 'Статус загрузки',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Текст кнопки',
    size: '2xl',
    variant: 'solid',
  },
  render: (args) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return <Button {...args} pending={loading} onClick={handleClick} />;
  },
};
