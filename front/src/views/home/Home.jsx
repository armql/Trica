import React from "react";
import NewsLetter from "./contents/NewsLetter";
import NewnPopular from "./type/NewnPopular";
import useToggle from "../../hooks/useToggle";
import Story from "./type/Story";
export default function Home() {
  const { close, effect, open } = useToggle();

  return (
    <section className="w-full h-full flex bg-white flex-col gap-12 py-4">
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 px-4 pt-8">
          <div className="font-semibold text-3xl text-zinc-900">Today</div>
          <div className="flex flex-row gap-3">
            <button
              type="button"
              onClick={close}
              className={`text-2xl font-semibold transition ${
                effect ? "text-zinc-300 hover:text-zinc-600" : "text-zinc-800"
              }`}
            >
              New&Popular
            </button>
            <button
              type="button"
              onClick={open}
              className={`text-2xl font-semibold transition ${
                effect ? "text-zinc-800" : "text-zinc-300 hover:text-zinc-600"
              }`}
            >
              Story
            </button>
          </div>
        </div>
        {!effect && <NewsLetter />}
      </article>

      {!effect ? <NewnPopular /> : <Story />}
    </section>
  );
}
