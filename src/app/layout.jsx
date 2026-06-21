import "./globals.css";
import { Ubuntu, Source_Sans_3, Lato, Oswald, Poppins } from "next/font/google";
import Providers from "./componenets/provider";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Precision Accounting",
    template: "%s | Precision Accounting" 
  }
};

export default function RootLayout({ children }) {
  return (
    <html
     title="Precision Accounting"
      lang="en"
      className={`${ubuntu.variable} ${sourceSans.variable} ${oswald.variable} ${lato.variable} ${poppins.variable}`}>
      <body>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  );
}
