import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "antlopsou porfolio",
  description: "antlopsou porfolio",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locales = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={locales}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
