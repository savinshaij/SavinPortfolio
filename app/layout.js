
import "./globals.css";


export const metadata = {
  title: "Savin | Portfolio",
  description: "Portfolio of savin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth   max-w-full mt-2 md:px-6 px-3  mx-auto  bg-[#121212] "
 
      >
        {children}
      </body>
    </html>
  );
}
