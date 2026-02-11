import "./globals.css";
import DarkLight from "@/components/DarkLight";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Marcin G.",
};

const fullName = "Marcin Górniakowski";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  url: "https://mget.pl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        />
        <meta name="author" content={fullName} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="apple-mobile-web-app-title" content="Marcin G." />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" />
      </head>
      <body className="bg-white dark:bg-[color:#1C1B22]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DarkLight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
