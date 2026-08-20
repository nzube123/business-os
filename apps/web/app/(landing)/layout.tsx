import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";


export const metadata: Metadata = {
  title: "Business OS — AI Operating System for Businesses",
  description:
    "An AI-powered operating system designed to help businesses manage, automate, and understand their operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
