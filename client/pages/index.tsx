import { Inter } from "next/font/google";
import Header from "./composants/header/header";
import Accueil from "./composants/accueil/accueil";
import Footer from "./composants/footer/footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Accueil />
      <Footer />
    </>
  );
}
