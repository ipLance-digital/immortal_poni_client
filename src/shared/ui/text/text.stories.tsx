import { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'body-16',
        'body-14',
        'body-13',
        'numbers',
        'button-16',
        'button-14',
        'button-12',
      ],
      description: 'Вариант стилизации',
      table: {
        type: {
          summary:
            'heading-1 | heading-2 | heading-3 | heading-4 | heading-5 | body-16 | body-14 | body-13 | numbers | button-16 | button-14 | button-12',
        },
        defaultValue: { summary: 'body-16' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Текст текста",
    variant: "body-16",
  },
  render: (args) => <Text {...args}>{args.children}</Text>,
};
