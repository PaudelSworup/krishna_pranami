import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Card from "@/components/Card";
import Nav from "@/components/Nav";
import { items } from "@/objects/items";
import React, { useContext } from "react";
import Layout from "../Layout";

const Index = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <Layout title="videos">
      <Nav darkmode={darkmode} />
      <div className="p-4 mx-8 flex flex-wrap justify-center gap-4">
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
