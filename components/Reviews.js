"use client";
import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/reviews";
import Masonry from "react-masonry-css";
import { useState } from "react";

export default function Reviews() {
  const [count, setCount] = useState(3);
  return (
    <SectionWrapper>
      <Heading>Testimonials</Heading>
      <h1 className="text-3xl md:text-5xl font-black capitalize mt-5">
        what{" "}
        <strong className="text-violet-600 dark:text-zinc-400">
          i focus on
        </strong>
      </h1>
      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5 leading-[22px] dark:text-zinc-400">
        Based on my learning journey and approach to projects
      </p>
      <div className="relative w-full">
        {data.length !== count ? (
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white/80 dark:from-[#121212]/90 from-[50%] to-transparent flex justify-center items-end z-[9999]">
            <button
              onClick={() => setCount(count + 3)}
              className="h-[45px] bg-violet-600 text-white rounded-lg font-medium text-base capitalize px-4"
            >
              show more
            </button>
          </div>
        ) : (
          ""
        )}

        <Masonry
          breakpointCols={{
            default: 3,
            1200: 3,
            1000: 2,
            700: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.slice(0, count).map((rating) => {
            const Icon = rating.icon;
            return (
              <div
                key={rating.id}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-7 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="flex gap-5">
                  <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-violet-500" />
                  </div>
                  <div className="flex-1">
                    <h1 className="font-bold text-lg capitalize text-zinc-900 dark:text-zinc-300">
                      {rating.title}
                    </h1>
                    <span className="block mt-[1px] text-base text-zinc-500 dark:text-zinc-300 capitalize font-medium leading-[20px]">
                      {rating.subtitle}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                  {rating.text}
                </p>
              </div>
            );
          })}
        </Masonry>
      </div>
    </SectionWrapper>
  );
}
