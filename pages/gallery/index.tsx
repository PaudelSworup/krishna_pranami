import React, { useContext } from "react";
import { galleryItems } from "@/objects/GalleryItems";
import Nav from "@/components/Nav";
import ThemeContext from "@/ApplicationWrapper/ThemeContext";
import { useRouter } from "next/router";
import Image from "next/image";

const index = () => {
  const { darkmode } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <>
      <Nav darkmode={darkmode} />
      <div className="px-5 gap-3 m-3 sm:grid md:grid-cols-2 xl:grid-cols-4">
        {galleryItems?.map((items) => (
          <div
            onClick={() => router.push(`/gallery/${items?.id}`)}
            key={items?.id}
            className="image_gallery_container shadow-2xl cursor-pointer hover:scale-100"
          >
            {/* <img
              className="h-[300px] md:h-[400px] image_gallery  md:max-w-full rounded-lg"
              src={items?.img}
              alt=""
            /> */}
            <Image
              src={items?.img}
              alt=""
              width={300}
              className="image_gallery"
              height={300}
              style={{ height: "300px", width: "100%", borderRadius: "10px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
