import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: 'Lumo GDL',
  description: 'A game dev blog created using React, NextJS, and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-400 p-8 my-6 rounded-sm">
        <Image alt="Lumo GDL" src="/logo.png" width={50} height={50} className="mx-auto rounded-md"/>
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Lumo GDL</h1>
        </Link>
        <p className="text-slate-600">🎮 Welcome to my <strong>game dev log</strong>. 💻 </p>
        <Image className="rounded-sm mt-6 transition ease-in-out hover:scale-105" alt="code_image" src="/images/top_bg.png" width={896} height={250}/>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-800 mt-12 py-6 text-center text-slate-400">
        <h3>Developed by <a href="https://www.lumobyte.com">LumoByte</a></h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-4xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
