import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FormProvider } from '@/context/FormContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VitaPet Saúde",
  description: "Seja bem vindo à VitaPet Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
