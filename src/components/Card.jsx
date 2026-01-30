import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center">
        {props.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center w-64 min-h-80 border-2 border-[#0184C9] rounded-2xl text-center p-2"
          >
            <div className="my-2"><img src={item.imageUrl} alt="service-images" /></div>
            <h4 className="text-[18px] font-bold py-2">{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
