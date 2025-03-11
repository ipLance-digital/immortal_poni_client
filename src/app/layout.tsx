import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/app/providers';
import { AppNav } from '@/widgets/app-nav';
import { PropsWithChildren } from 'react';
import { StyledComponentsRegistry } from './registry';

export const metadata: Metadata = {
  title: 'IPLance',
  description: 'IPLance для крутых',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en'>
      <body style={{ margin: 10 }}>
        <StyledComponentsRegistry>
          <StoreProvider>
            <AppNav />
            <main>{children}</main>
          </StoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
