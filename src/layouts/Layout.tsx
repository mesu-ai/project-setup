import { Suspense } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
