import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const Article: React.FC<{ articleData: any }> = (props) => {
  const router = useRouter();
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className="p-4">
      <div className="flex flex-col gap-3 w-auto">
        <h2
          className={` text-lg font-serif font-bold tracking-tight  ${
            darkmode ? "text-white" : "text-black"
          }`}
        >
          {props?.articleData?.title}
        </h2>
        <p
          className={`text-justify tracking-widest ${
            darkmode ? "text-white" : "text-black"
          }`}
        >
          {props?.articleData?.description}
        </p>
        <button
          onClick={() => router.push(`/articles/${props?.articleData?.id}`)}
          className="bg-[#FAF4F6] tracking-wide font-serif uppercase w-36 text-black hover:bg-gray-300  font-light py-2 px-4 rounded-full"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Article;
