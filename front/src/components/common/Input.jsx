import React, { Fragment } from "react";

function Input({
  type,
  name,
  placeholder,
  id,
  onChange,
  value,
  essentials,
  essentialsType,
  isError,
  effect,
  onFocus,
  onBlur,
}) {
  const Icon = essentials[essentialsType];
  return (
    <Fragment>
      <div
        className={`flex flex-row gap-2 border-b items-center bg-transparent justify-start transition-all outline-none duration-300 ${
          effect
            ? isError
              ? "border-red-400"
              : "border-black"
            : isError
            ? "border-red-400"
            : "border-zinc-300"
        }`}
      >
        {Icon}
        {essentials.mail}
        <input
          type={type}
          name={name}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="px-1.5 placeholder:text-zinc-300 placeholder:font-normal py-2 text-base w-full outline-none bg-transparent font-semibold placeholder-white bg-white focus:bg-white focus:outline-none"
        />
      </div>
    </Fragment>
  );
}
export default Input;
