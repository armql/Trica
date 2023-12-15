import React, { Fragment } from "react";

export default function Input({
  labelFor,
  labelName,
  type,
  inputName,
  placeholder,
  id,
}) {
  return (
    <Fragment>
      <input
        type={type}
        name={inputName}
        id={id}
        placeholder={placeholder}
        className="px-1.5 placeholder:text-zinc-300 placeholder:font-normal py-2 text-base w-full outline-none bg-transparent font-semibold"
      />
    </Fragment>
  );
}
