'use client';
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import LoginHeader from "@/components/LoginHeader/LoginHeader";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default function LayoutWrapper({ children }) {
  const pathName = usePathname();

  const validPaths = ['/', '/especiarias', '/especiarias/[id]', '/conta/login', '/conta/cadastro', '/sobre'];

  const is404 = !validPaths.includes(pathName) && !(pathName.startsWith('/especiarias/'));

  const userLayout = pathName === '/conta/login' || pathName === '/conta/cadastro' || is404;

  return (
    <>
      {userLayout ? <LoginHeader /> : <Header />}
      {children}
      <ScrollToTop />
      {userLayout ? null : <Footer />}
    </>
  );
}
