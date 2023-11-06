import { card_interface } from "@/interfaces/interface";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Card: React.FC<card_interface> = ({ id, source, imgSrc, videoTitle }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const playVideo = async () => {
    if (videoRef.current) {
      videoRef.current.src = source;
      videoRef.current.load();
      videoRef.current.play();
      setShow(true);
    }
  };

  const closeVideo = async () => {
    if (videoRef.current) {
      videoRef.current.src = "";
      videoRef.current.load();
      videoRef.current.pause();
      setShow(false);
    }
  };

  return (
    <>
      <div
        className={`fixed ${
          show ? "flex" : "hidden"
        } inset-0  items-center justify-center z-50`}
      >
        <div className="bg-white rounded-lg shadow-xl">
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              {videoTitle}
            </h3>
            <div className="bg-gray-50 p-4 flex justify-end">
              <FaTimes
                onClick={closeVideo}
                className="text-red-700 text-2xl transition ease-in-out duration-200 hover:scale-125 cursor-pointer"
              />
            </div>
            <div className="mt-2">
              <video
                ref={videoRef}
                className="w-[500px] h-64"
                autoPlay
                src=""
                controls
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "200px", height: "200px" }}>
        <Image
          onClick={playVideo}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={
            imgSrc ||
            "https://pranami.org/templates/yootheme/cache/6d/slide_3-6d78ff13.jpeg"
          }
          alt=""
          width={300}
          height={300}
          style={{
            objectFit: "cover", // You can use "cover" to maintain aspect ratio and fill the container
            width: "100%",
            height: "100%",
            borderRadius: "0.125rem",
            transition: "all 250ms ease-in-out 0s",
            maxWidth: "200px", // Set the maximum width
            transform: isHovering ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
    </>
  );
};

export default Card;
