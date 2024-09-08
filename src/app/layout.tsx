import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VINLY FORWARD BRIDGE. Company Limited",
  description: `Vinly Foward Bridge's contracting and
subcontracting services offer
comprehensive project management
solutions. We specialize in planning,
budgeting, scheduling, and overseeing
the work of subcontractors to ensure
efficient and successful project
execution. Our experienced team
leverages industry best practices and
advanced project management tools to
deliver projects on time, within budget,
and to the highest quality standards.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
