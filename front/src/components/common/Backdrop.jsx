import React from "react";

const Backdrop = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30">
      {children}
    </div>
  );
};

export default Backdrop;
