'use client'
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/log_in' || pathname === '/sign_in';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>
        <div >
          {children}
        </div>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}