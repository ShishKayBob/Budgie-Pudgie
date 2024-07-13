import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import "../../public/globals.css";
import * as React from 'react';
import NextThemeProvider from '@/components/organisms/NextThemeProvider';

export const metadata: Metadata = {
  title: "Budgie Pudgie",
  description: "An financial planner for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
        <NextThemeProvider>
            {children}
          </NextThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
