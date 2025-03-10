import React from "react";

const Interactive = ({ title, text }) => {
  return (
    <div className="px-8">
      <hr className="-mx-4 my-4 h-px border-0 bg-brown-200" />

      <h4 className="leading-8 italic font-bold text-brown-800">{title}</h4>
      {text.map((item, index) => (
        <p
          key={index}
          className="py-2 tracking-wide leading-6 italic text-brown-800"
        >
          {item}
        </p>
      ))}
      <hr className="-mx-4 my-4 h-px border-0 bg-brown-200" />
    </div>
  );
};

export default Interactive;
