import React from "react";

const LaserTreatment = () => {
  return (
    <article
      className="flex flex-col items-start w-full mx-8 gap-8 animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards"
      id="postCore"
    >
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9">
          <section className="flex flex-col gap-4 " id="laserTreatment">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Laser Treatment
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              With the use of a Diode laser, painless soft tissue treatments can
              be carried out safely. This includes treatment of: Canker sores,
              gum excisions, and periodontal pocket therapy.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default LaserTreatment;
