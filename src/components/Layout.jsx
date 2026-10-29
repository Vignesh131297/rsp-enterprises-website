import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Marquees from './Marquees';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", color: "#1C1B19", background: "#F6F3EE", fontSize: "17px", lineHeight: "1.55" }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Marquees />
      <Footer />
    </div>
  );
}
