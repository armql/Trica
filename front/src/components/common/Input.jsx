import React, { Fragment } from "react";

export default function Input({
  type,
  name,
  placeholder,
  id,
  onChange,
  value,
  essentials,
  essentialsType,
  isError,
}) {
  const Icon = essentials[essentialsType];

  return (
    <Fragment>
      <div
        className={`flex flex-row gap-2 border-b items-center justify-start ${
          isError === true ? "border-red-400" : "border-zinc-300"
        }`}
      >
        {Icon}
        {essentials.mail}
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="px-1.5 placeholder:text-zinc-300 placeholder:font-normal py-2 text-base w-full outline-none bg-transparent font-semibold placeholder-white bg-white"
        />
      </div>
    </Fragment>
  );
}
