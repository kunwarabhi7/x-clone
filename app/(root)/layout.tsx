import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import Fotter from "@/components/shared/Fotter";
import Leftbar from "@/components/shared/Leftbar";
import RightBar from "@/components/shared/RightBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X Clone || Home",
  description: "X || Twitter clone Created by Abhishek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main>
            <Leftbar />
            <section>
              <div>{children}</div>
            </section>
            <RightBar />
          </main>

          <Fotter />
        </body>
      </html>
    </ClerkProvider>
  );
}
