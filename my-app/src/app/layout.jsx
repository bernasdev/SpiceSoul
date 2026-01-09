'use client';
import { usePathname } from "next/navigation";
 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "@/components/Footer/Footer";
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

import { DM_Serif_Display, Questrial } from 'next/font/google';

export const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
});


 
export default function RootLayout({ children }) {
  const pathName = usePathname();
 
  const validPaths = ['/', '/especiarias', '/especiarias/[id]',  '/conta/login', '/conta/cadastro', '/sobre'];
 
  const is404 = !validPaths.includes(pathName) && !(pathName.startsWith('/especiarias/'));
 
  const userLayout = pathName === '/conta/login' || pathName === '/conta/cadastro' || is404;
  return (
    <html lang="pt-BR" suppressHydrationWarning={true} className={`${dmSerif.className} ${questrial.className}`}>
     
      <head>
        <title>Spice & Soul</title>
        <link rel="icon" href=" /imagensProjeto/elefante.png" />
      </head>
      <body className={`${dmSerif.className} ${questrial.className}`} suppressHydrationWarning >
        {userLayout ? <LoginHeader></LoginHeader> : <Header></Header>}
        {children}
        <ScrollToTop></ScrollToTop>
        {userLayout ? '' : <Footer></Footer>}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossOrigin="anonymous"></script>
 
      </body>
    </html>
  );
}