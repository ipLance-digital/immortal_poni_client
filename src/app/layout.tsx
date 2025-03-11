import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { StoreProvider } from '@/app/providers';
import { AppNav } from '@/widgets/app-nav';
import { StyledComponentsRegistry } from './registry';

import './globals.css';

export const metadata: Metadata = {
  title: 'IPLance',
  description: 'IPLance для крутых',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <StoreProvider>
            <AppNav />
            <main
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              {children}
            </main>
          </StoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
