import React from "react";

const MouthGuard = () => {
  return (
    <article
      className="flex flex-col items-center w-full mx-8 gap-8 animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards"
      id="postCore"
    >
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9">
          <section className="flex flex-col gap-4 px-9" id="mouthGuard">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Mouth Guards
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              We recommend sports guards for our patients that enjoy contact
              sports. Night guards are also recommended in certain cases when
              patients are experiencing clenching or grinding during their
              sleep. These guards are fabricated by a dental laboratory using a
              scan of your own unique dental situation. Ask your dentist if a
              certain protective guard is recommended for you.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default MouthGuard;
