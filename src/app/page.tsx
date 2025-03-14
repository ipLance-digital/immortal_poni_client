'use client';

import { Button } from '@/shared/ui';
import { useTheme } from 'styled-components';

export default function Home() {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        backgroundColor: theme.colors.white,
        height: '100dvh',
      }}
    >
      <Button size='2xl' variant='solid'>
        Текст кнопки
      </Button>
      <Button size='xl'>Текст кнопки</Button>
      <Button size='lg'>Текст кнопки</Button>
      <Button size='md'>Текст кнопки</Button>
      <Button size='xs'>Текст кнопки</Button>
      <Button size='2xs'>Текст кнопки</Button>
    </div>
  );
}
