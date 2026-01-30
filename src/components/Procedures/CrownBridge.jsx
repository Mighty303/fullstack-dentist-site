import React, { useState, useRef } from "react";
import Faq from "@/components/Faq";
import { Crown, Bridge, inlayOnlay } from "@/data/generalDentistry";

const CrownBridge = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const containerRef = useRef(null);

  const tabs = ["Crown", "Bridge", "Inlay/Onlay"];
  const faqContentMap = {
    0: Crown,
    1: Bridge,
    2: inlayOnlay,
  };

  const handleClick = (direction) => {
    const tabWidth = containerRef.current.firstChild.offsetWidth;
    const newIndex =
      direction === "left"
        ? Math.max(selectedTabIndex - 1, 0)
        : Math.min(selectedTabIndex + 1, tabs.length - 1);
    setSelectedTabIndex(newIndex);
    containerRef.current.scrollTo({
      left: newIndex * tabWidth,
      behavior: "smooth",
    });
  };

  return (
    <article className="flex flex-col items-center w-full gap-8 animate-fade-down animate-once animate-duration-1000 animate-normal animate-fill-forwards">
      <div className="w-full flex justify-center">
        <div className="max-w-screen-xl p-0 md:p-9 space-y-8">
          <section className="flex flex-col gap-2 px-9" id="CrownBridge">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              Crowns and Bridges
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin">
              Crowns are a prosthetic restoration used to cover a damaged tooth
              or a tooth with compromised structural integrity. The crowns are
              an indirect device that is created by the dental laboratory using
              a scan or an imprint from prepared tooth. They are created to fit
              exactly and are fixed on permanently. A dental bridge is a fixed
              prosthetic restoration created to replace one or more missing
              teeth by spanning the gap between two structurally healthy teeth
              that will be covered with a crown. A bridge is a viable way to
              substitute a missing tooth.
            </p>
          </section>
          <section className="flex flex-col gap-2 px-9">
            <h2 className="text-2xl md:text-4xl text-black font-bold">
              What to Expect from Your Crown or Bridge Appointment
            </h2>
            <p className="text-md md:text-xl text-gray-700 text-start font-thin">
              The procedure consists of two visits:
            </p>
            <h3 className="text-md md:text-xl font-bold">
              First Visit (Preparation):
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Time Commitment:</b>
                <p className="text-gray-700 font-thin text-base">
                  Expect a significant amount of time for the first visit, where
                  we prepare the tooth for the crown or bridge. Feel free to
                  inquire with our receptionist ahead of time about the
                  approximate duration of your appointment.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Numbing:</b>
                <p className="text-gray-700 font-thin text-base">
                  Numbing the tooth is likely during both visits, ensuring a
                  painless experience. Rest assured, our dedicated staff will
                  prioritize your comfort throughout the procedure.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Attire:</b>
                <p className="text-gray-700 font-thin text-base">
                  Come in comfortable clothes to make your experience as
                  relaxing as possible.
                </p>
              </li>
            </ul>

            <h3 className="text-md md:text-xl font-bold">
              In Between Appointments:
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Temporary Crown:</b>
                <p className="text-gray-700 font-thin text-base">
                  A chairside temporary crown will be placed between the two
                  appointments, maintaining functionality and aesthetics.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Temporary Cement:</b>
                <p className="text-gray-700 font-thin text-base">
                  Crowns are glued on with a weak glue, so avoiding crunchy or
                  sticky foods is ideal. In case of the crown coming off or
                  breaking, please call our office, if you can not reach our
                  office, you can use Poligrip denture glue.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Sensitivity:</b>
                <p className="text-gray-700 font-thin text-base">
                  After the first visit, you may experience sensitivity for up
                  to 2 or 4 weeks, stemming from drilling, materials used, or
                  interactions with gum and other tissues.
                </p>
              </li>
            </ul>

            <h3 className="text-md md:text-xl font-bold">
              Second Visit (Delivery):
            </h3>
            <ul className="text-md md:text-xl text-black text-start list-disc list-outside pl-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="text-[#0184C9] mx-4">
                <b>Duration of Freezing:</b>
                <p className="text-gray-700 font-thin text-base">
                  The numbing effect may last up to two hours after the second
                  visit.
                </p>
              </li>
              <li className="text-[#0184C9] mx-4">
                <b>Potential for Crown Adjustment:</b>
                <p className="text-gray-700 font-thin text-base">
                  There is a chance the crown may feel high initially. If so, we
                  will coordinate an adjustment appointment to ensure a perfect
                  fit and your comfort.
                </p>
              </li>
            </ul>

            <p className="text-md md:text-xl text-gray-700 text-start font-thin text-base">
              Rest assured, our team at Broadway Smiles is dedicated to making
              your experience as comfortable as possible. Feel free to discuss
              any concerns with us, and ask us for things that may make you feel
              more comfortable, like a blanket, hair tie, ear plugs or
              headphones.
            </p>
          </section>
        </div>
      </div>
      <section className="w-full bg-[#E5F6FF] flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-center mt-16">
          Frequently Asked <span className="text-[#0184C9]">Questions</span>
        </h2>
        <div ref={containerRef}>
          {tabs.map((tab, index) => (
            <button
              key={tab + index} // Ensure unique key for React elements
              className={`relative px-4 py-2 mt-4 rounded transition-all duration-300 ease-in-out transform ${
                selectedTabIndex === index ? "text-[#0184C9]" : "text-black"
              }`}
              onClick={() => setSelectedTabIndex(index)}
            >
              {tab}
              {selectedTabIndex === index && (
                <div
                  className="absolute bottom-0 left-0 right-0 border-2 border-[#0184C9] transition-all duration-300 ease-in-out transform"
                  style={{ backgroundColor: "#0184C9" }}
                ></div>
              )}
            </button>
          ))}
        </div>
        <div className="w-full md:w-[80%]">
          <Faq
            noBorder={true}
            arr={faqContentMap[selectedTabIndex]}
            location={"Crowns & Bridges FAQ"}
          />
        </div>
      </section>
    </article>
  );
};

export default CrownBridge;
