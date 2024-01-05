import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import { galleryItems } from "@/objects/GalleryItems";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useContext } from "react";
import Layout from "../Layout";
import Nav from "@/components/Nav";
// import Image from "next/image";
import SimpleFooter from "@/components/SimpleFooter";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Description = ({
  galleryData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { darkmode } = useContext(ThemeContext);
  const dark = darkmode ? "text-white" : "text-black";
  return (
    <>
      <Layout title={galleryData?.title}>
        <Nav darkmode={darkmode} />
        <div className="grid gap-4">
          <div>
            <Image
              src={galleryData?.img}
              alt=""
              width={800}
              className="image_gallery"
              height={700}
              style={{ height: "80vh", width: "100%", borderRadius: "10px" }}
            />
          </div>

          <Marquee className="mt-2">
            {galleryData?.images?.map((img: any, index: any) => {
              return (
                <div key={index}>
                  <Image
                    src={img?.img}
                    alt=""
                    width={700}
                    className="image_gallery"
                    height={700}
                    style={{
                      height: "310px",
                      width: "330px",
                      margin: "2px",
                      // maxWidth: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
        {/* </div> */}

        <SimpleFooter />
      </Layout>
    </>
  );
};

export default Description;

export async function getStaticPaths() {
  const path = galleryItems?.map((gallery) => {
    return {
      params: {
        galleryDetail: `${gallery?.id}`,
      },
    };
  });
  return {
    paths: path,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const ID = parseInt(params?.galleryDetail as string);

  const galleryData = galleryItems?.find((item) => item?.id === ID);
  return {
    props: {
      galleryData,
    },
  };
};
