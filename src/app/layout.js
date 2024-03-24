import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Assistant } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({
  subsets: ['latin'],
  weight:["200", "300", "500", "600", "700", "800"],

});

export const metadata = {
  title: "Kilebefy",
  description: "Create notes and diagrams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={assistant.className}>
        <Toaster/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
