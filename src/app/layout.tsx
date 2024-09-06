import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "In Ảnh Trực Tuyến",
  description: "In ảnh tốt nhất tại Cần Thơ. In ảnh trên mọi chất liệu, mọi kích thước. In ảnh giá rẻ, chất lượng cao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
