import React, { useState } from "react";

export default function NewsLetter() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4b4f/7927/f296bbffd90efeff1a71e02d374d3d6f?Expires=1704067200&Signature=NuhZbaxtkeS3hlfkr93V5W2~LR2nLQuNwzDs3iAWqWyK2650IhPU~xgFmZfQkHshxqU-womL0EQSNUZxfeY2N1ErWBx5G8pBPfMQENzUYGrQkr3M0wpYvuWgy2Po0byWbx7L-vV-xAsnowwzTfvEnzgUi8BdEH1lk3u3P8tu9Fz4w1HhL63OP1LF~y1tlfVBdmEaqUbD4Nzau0mA7YvvYrtxWPkCMQqmgO9fVBmwwQDGCwRhnF50HMMKyi3l~72~dmwYLTwWrkXOO3DzDCtD9lpsdwWvqyHlshGeWIZPsqgzFTPenvR0lmrTn4HuPlrWZzzulnmbkm~FXFdanY8izQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Nike SB Janoski QS Turbo Green Tie Dye Skate Shoes",
      price: 14,
    },
    {
      image:
        "https://static.nike.com/a/images/w_960,c_limit,f_auto/c90865e5-f53d-4d6f-89ee-a2681ff28bf3/where-to-get-em-air-jordan-11-neapolitan.jpg",
      title: "Air Jordan 11 'Neapolitan'",
      price: 122,
    },
    {
      image:
        "https://static.nike.com/a/images/w_960,c_limit,f_auto/d6035309-cc7a-40a5-9e5d-2fc28690d5b6/nike-sb-x-air-jordan-4-pine-green-launch-details.jpg",
      title: "Nike SB x Air Jordan 4 'PineGreen'",
      price: 109,
    },
    {
      image:
        "https://static.nike.com/a/images/w_960,c_limit,f_auto/75ffdd25-743c-4f75-95ce-7c15c08a674d/launch-details-nike-attack-og.jpg",
      title: "Nike Attack OG",
      price: 199,
    },
  ];

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <article className="px-2">
      <div className="w-full h-[320px] shadow-sm rounded-lg relative flex flex-col bg-amber-400 items-start transition-transform justify-end">
        <img
          src={data[currentSlide].image}
          alt=""
          className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full overflow-hidden rounded-lg"
        />
        <div className="flex flex-col gap-1 z-10 p-6">
          <div className="font-medium text-white">New in</div>
          <div className="text-white font-semibold text-xl">
            {data[currentSlide].title}
          </div>
          <div className="text-white font-medium text-sm">
            ${data[currentSlide].price} USD
          </div>
          <div className="pt-4 gap-1 flex flex-row">
            {data.map((slide, index) => (
              <button
                key={index}
                type="button"
                onClick={() => changeSlide(index)}
                className={`h-1 rounded-full ${
                  currentSlide === index
                    ? "bg-white w-10"
                    : "w-2 bg-white bg-opacity-40"
                } transition-all duration-300 hover:bg-opacity-80`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
