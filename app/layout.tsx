import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import '@/app/globals.css'

const montserrat = Montserrat_Alternates({ weight:["100","200","300","400","500","600","700","800","900"],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nethmina Sandaruwan",
  description: "Welcome To My Portfolio👋: Crafting tomorrow's solutions with a touch of professionalism and a commitment to continuous improvement🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-[16px]`}>{children}</body>
    </html>
  );
}
