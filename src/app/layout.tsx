import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { SupportWidget } from '@/widgets';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script async src='https://unpkg.com/react-scan/dist/auto.global.js' />
      </head>
      <body>
        <Providers>
          <div id={'main-wrapper'}>
            {children}

            <SupportWidget />
          </div>
        </Providers>
      </body>
    </html>
  );
}
