import ReduxProvider from "./redux-provider";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Awfis | Awfis Internal",
  description: "Awfis | Awfis Internal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <ReduxProvider>
          <div className="flex">
            <Sidebar />
            <main className="w-full flex-1 overflow-hidden">
              <Header />
              {children}
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
