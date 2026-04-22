import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";


export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <CTA/>
      <Footer />
    </>
  );
}