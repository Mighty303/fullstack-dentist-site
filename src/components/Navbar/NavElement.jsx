import React from "react";
import Link from "next/link";

const NavElement = (props) => {
  return (
    <li className="mx-4 my-0 md:my-0">
      <Link
        href={props.link}
        className={`${props.color} hover:text-[#0184C9] hover:duration-500 text-lg md:text-xl`}
        onClick={() => window.scroll(0, 0)}
      >
        {props.text}
      </Link>
    </li>
  );
};

export default NavElement;
