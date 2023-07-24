import React from "react";
import Clothing from "./Clothing/Clothing";
import Footer from "./Footer/Footer";
import Head from "./Head/Head";
import NewColl from "./newColl/NewColl";
import UnderDiv from "./underDiv/UnderDiv";

function Home() {
  return (
    <>
      <Head />
      <NewColl />
      <Clothing />
      <UnderDiv />
      <Footer />
    </>
  );
}

export default Home;
