"use client";
import Navbar from "./components/Navbar";
import FloatingButton from "./components/tombol_wa";
import Footer from "./components/Footer";
import Produk from "./page/Produk";
import Brand from "./page/Brand";
import Category from "./page/Category";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Brand/>
        <Category/>
        <Produk />
        <div>
          <a></a>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
