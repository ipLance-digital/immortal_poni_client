import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { AppNav } from '@/widgets/app-nav';
import { AppProvider } from './_providers/app-provider';
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
          <AppProvider>
            <AppNav />
            <main>{children}</main>
          </AppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
