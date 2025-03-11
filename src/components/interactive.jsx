import React from "react";

const Interactive = ({ title, text }) => {
  return (
    <div className="sm:px-8 px-2">
      <hr className="-mx-2 my-4 h-px border-0 bg-brown-200" />

      <h4 className="leading-7 tracking-wide italic font-bold text-brown-800">
        {title}
      </h4>
      {text.map((item, index) => (
        <p
          key={index}
          className="py-2 tracking-wide leading-7 italic text-brown-800"
        >
          {item}
        </p>
      ))}
      <hr className="-mx-2 my-4 h-px border-0 bg-brown-300" />
    </div>
  );
};

export default Interactive;
