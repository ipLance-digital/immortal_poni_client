import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/app/providers';
import { AppNav } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'IPLance',
  description: 'IPLance для крутых',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppNav />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
