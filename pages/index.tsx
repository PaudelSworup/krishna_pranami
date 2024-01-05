import { Inter } from "next/font/google";
import Layout from "./Layout";
import Nav from "@/components/Nav";
import { useContext } from "react";
import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Switchmode from "@/components/SwitchMode";
import Navs from "@/components/Navs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkmode, toggleMode } = useContext(ThemeContext);
  return (
    <Layout title="Pranami Sampradaya">
      <Nav darkmode={darkmode} />
      <Banner />
      <Intro darkmode={darkmode} />
      <Footer />
      <div className="fixed top-40 left-1 z-20">
        <Switchmode darkmode={darkmode} toggleMode={toggleMode} />
      </div>
    </Layout>
  );
}
