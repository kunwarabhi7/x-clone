import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import Fotter from "@/components/shared/Fotter";
import Leftbar from "@/components/shared/Leftbar";
import RightBar from "@/components/shared/RightBar";
import { ThemeProvider } from "@/components/theme-provider";

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
        <body className={`${inter.className} dark:bg-black`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex">
              <Leftbar />
              <section className="flex-1 border ">
                <div>{children}</div>
              </section>
              <RightBar />
            </main>

            <Fotter />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
