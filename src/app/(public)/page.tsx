'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/profile'}>Профиль</Link>
    </div>
  );
}
