import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="h-80 sm:mx-20 m-2 mx-2">
      <h2 className="underline text-xl text-center tracking-wider font-serif font-bold">
        Upcoming events
      </h2>
      <div className="flex justify-center items-center mt-10">
        <video
          className="w-[500px] h-64"
          src="/media/pranami_quiz.mp4"
          controls
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;
