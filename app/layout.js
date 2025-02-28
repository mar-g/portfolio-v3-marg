import "./globals.css";
import DarkLight from "@/components/DarkLight";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Marcin G.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DarkLight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
