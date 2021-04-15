import React from "react";

const Button = (props) => {
  return (
    <a
      href="#"
      className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider text-primary border-primary md:border-2 ml-2 hover:bg-primary hover:text-white transition ease-out duration-500"
    >
      {props.btnText}
    </a>
  );
};

export default Button;
