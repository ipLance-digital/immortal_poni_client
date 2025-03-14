import { Button } from '@/shared/ui';

export default function Home() {
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <Button size='2xl'>Hello</Button>
      <Button size='xl'>Hello</Button>
      <Button size='lg'>Hello</Button>
      <Button size='md'>Hello</Button>
      <Button size='xs'>Hello</Button>
      <Button size='2xs'>Hello</Button>
    </div>
  );
}
