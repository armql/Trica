import React from "react";
import Backdrop from "./Backdrop";

export default function Modal({ children }) {
  return (
    <Backdrop>
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </Backdrop>
  );
}
