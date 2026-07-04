import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "../store/ReduxProvider";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import Script from "next/script";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCBT JAIVIK KISHAN",
  description: "प्राकृतिक खेती के लिए TCBT तकनीक",
  verification: {
    google: "NH5B_d8bbzJfYkTVwu1fE1OexZYn3BXmhtIRbejM6B0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];
    w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PXP6TTXP');
  `}
</Script>
      </head>

      <body className={`${inter.variable} ${devanagari.variable}`}>
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-PXP6TTXP"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <ReduxProvider>
              <Header />
              {children}
              <Footer />
              <ChatbotWidget />
            </ReduxProvider>

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}