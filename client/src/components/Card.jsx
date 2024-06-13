import React from "react";

const Card = ({ imageUrl, title, description, link }) => {
  return (
    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-10">
      <img
        className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
        src={imageUrl}
        alt={title}
      />
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
            {title}
          </p>
        </div>
        <div className="absolute w-full flex place-content-center mt-20">
          <p className="font-sans text-center w-4/5 text-white mt-5">
            {description}
          </p>
        </div>
        <a
          href={link}
          className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48 flex items-center justify-center"
        >
          Play now
        </a>
      </div>
    </div>
  );
};

export default Card;
