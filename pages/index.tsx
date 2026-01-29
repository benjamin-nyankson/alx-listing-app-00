import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex items-center justify-center min-h-screen `}
    >
      <main className="">
        {/* TODO: remove this and the associated styles from tailwind.config */}
        <h1 className=" text-5xl font-bold text-primary font-mono overflow-hidden border-r-2 border-black whitespace-nowrap w-[10ch] animate-typing">
          Welcomee
        </h1>
      </main>
    </div>
  );
}
