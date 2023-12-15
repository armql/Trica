import React, { Fragment } from "react";

export default function Button({ type, onClick, style, children }) {
  return (
    <Fragment>
      <button type={type} onClick={onClick} className={style}>
        {children}
      </button>
    </Fragment>
  );
}
