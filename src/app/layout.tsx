import { Analytics } from '@vercel/analytics/react';

import '@styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend developer | Kadchenko Dmytro',
  description:
    'Welcome to my frontend developer portfolio! Discover more about my skills and experience in web development. Connect with me through my contact information, access my resume. Stay tuned for future updates as I build and showcase my web projects here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-body-1 grid min-h-dvh grid-rows-main-layout font-Roboto text-black transition-all duration-500 dark:bg-black dark:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
