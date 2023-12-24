import React, { useState } from "react";
import { motion } from "framer-motion";
import brands from "../../../assets/svg/essentials/brands";
import { Link } from "react-router-dom";
const cards = Object.keys(brands);

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 0.9,
    zIndex: 10,
    transition: {
      duration: 0.35,
    },
  },
  notSelected: (i) => ({
    rotateY: 0,
    scale: 0.8,
    zIndex: 0,
    boxShadow: "none",
    transition: {
      duration: 0.35,
      delay: i * 0.1,
    },
  }),
};

export default function OurBrands() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (brand) => {
    setSelectedCard(selectedCard === brand ? null : brand);
  };

  return (
    <div className="flashcards px-4 flex flex-col space-y-4">
      <div className="font-semibold text-zinc-800 text-xl">Our Brands</div>
      <div className="flex flex-row space-x-4 overflow-x-auto bg-white items-center">
        {cards.map((brand, i) => (
          <div
            key={brand}
            className="card rounded-full flex justify-center items-center relative"
          >
            <motion.div
              className="w-32 h-32 object-cover flex justify-center absolute back-content bg-zinc-100 items-center active:bg-zinc-200 rounded-full transition-all"
              style={{
                visibility: selectedCard === brand ? "visible" : "hidden",
              }}
            >
              <Link className="text-zinc-700 font-bold text-sm tracking-wide hover:text-black">
                All 201
              </Link>
            </motion.div>
            <motion.div
              className="w-32 h-32 object-cover flex justify-center items-center front-content bg-zinc-50 rounded-full hover:bg-zinc-100 transition-all cursor-pointer hover:scale-105"
              onClick={() => handleCardClick(brand)}
              style={{
                visibility: selectedCard === brand ? "hidden" : "visible",
              }}
              variants={cardVariants}
              animate={selectedCard === brand ? "selected" : "notSelected"}
              custom={i}
            >
              {brands[brand]}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
