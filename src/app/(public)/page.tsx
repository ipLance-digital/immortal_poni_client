'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link href={'/profile'}>Профиль</Link>
    </div>
  );
}
