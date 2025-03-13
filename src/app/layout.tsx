import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { Header } from './components/header';

export const metadata: Metadata = {
  title: 'IPLanse',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
