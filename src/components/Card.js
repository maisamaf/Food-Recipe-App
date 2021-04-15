import React from "react";

const Card = (props) => {
  return (
    <div className="mt-8 bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
      <img
        src={props.img}
        className="w-full h-32 sm:h-48 object-cover"
        alt="Stew"
      />
      <div className="m-4">
        <span className="font-bold">{props.title}</span>
        <span className="block text-sm">Recipe by {props.cook}</span>
      </div>
      <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
        <svg
          className="w-5 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{props.time} mins</span>
      </div>
    </div>
  );
};

export default Card;
