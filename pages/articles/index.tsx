import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import Article from "@/components/Article";
import Nav from "@/components/Nav";
import { article } from "@/objects/articleItems";
import Layout from "../Layout";
import React, { useContext } from "react";

const Index = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <>
      <Layout title="article">
        <Nav darkmode={darkmode} />
        <div className="sm:grid grid-cols-2 items-center lg:mx-[18%]">
          {article?.map((article) => (
            <Article key={article?.id} articleData={article} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
