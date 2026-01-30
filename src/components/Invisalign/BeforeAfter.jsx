import React from "react";

const BeforeAfterCard = ({ before_src, after_src, children }) => {
  return (
    <div className="bg-white rounded-2xl font-bold flex flex-col overflow-hidden">
      <div className="flex gap-1 ">
        <h2 className="w-1/2 text-center py-3 md:w-52">BEFORE</h2>
        <h2 className="w-1/2 text-center py-3 md:w-52">AFTER</h2>
      </div>
      <div className="flex gap-1 ">
        <img
          className="w-1/2 md:w-52 md:h-36 object-cover"
          src={before_src}
          alt={`${children}-before`}
        />
        <img
          className="w-1/2 md:w-52 md:h-36  object-cover"
          src={after_src}
          alt={`${children}-after`}
        />
      </div>
      <p className="text-center py-2 text-[#0184C9]">{children}</p>
    </div>
  );
};

export default BeforeAfterCard;
