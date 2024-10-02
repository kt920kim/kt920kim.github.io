import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: '김기태 & 박기영 결혼합니다.',
  description: '',
  openGraph: {
    title: '김기태 & 박기영 결혼합니다.',
    description: ''
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
