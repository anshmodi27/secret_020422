
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Echoes of Us | 4 Years of Love',
  description: 'A digital love story celebrating our 4th anniversary.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Alegreya:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
