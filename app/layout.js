import "./globals.css";
import DarkLight from "@/components/DarkLight";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Marcin G.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DarkLight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
