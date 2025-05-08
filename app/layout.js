

import "./globals.css";


export const metadata = {
  title: "Savin | Portfolio",
  description: "Portfolio of savin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
      </head>
      <body className="scroll-smooth   max-w-full mt-2 md:px-6 px-3  mx-auto   bg-zinc-900 "
 
      >
       
        {children}
      </body>
    </html>
  );
}
