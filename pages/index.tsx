import { Inter } from "next/font/google";
import Layout from "./Layout";
import Nav from "@/components/Nav";
import { useContext } from "react";
import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <Layout title="Pranami Sampradaya">
      <Nav darkmode={darkmode} />
      <Banner />
      <Intro darkmode={darkmode} />
    </Layout>
  );
}
