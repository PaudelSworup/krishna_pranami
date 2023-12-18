import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Card from "@/components/Card";
import Nav from "@/components/Nav";
import { items } from "@/objects/items";
import React, { useContext, useState } from "react";
import Layout from "../Layout";

const Index = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <Layout title="videos">
      <Nav darkmode={darkmode} />
      <div className="p-4 gap-4 videos-section cursor-pointer mx-10 sm:grid md:grid-cols-3 lg:flex flex-wrap justify-center">
        {items.map((data) => (
          <Card
            key={data?.id}
            id={data?.id}
            source={data?.media}
            imgSrc={data?.src}
            videoTitle={data?.videoTitle}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
