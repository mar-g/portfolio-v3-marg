"use client";
import Image from "next/image";
import data from "../data/header";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import Headerinfo from "./Headerinfo";

export default function Header() {
  const { image, name, jobTitle, address, experience, education } = data;
  return (
    <div className="flex items-center gap-x-8">
      <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          alt="profile image"
          className="w-full h-full object-cover hover:rotate-6 hover:scale-125 transition-all duration-500"
        />
      </div>
      <div>
        <h1 className="text-5xl font-black capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        <h3 className="mt-2 text-xl font-bold capitalize dark:text-zinc-400">
          {jobTitle}
        </h3>
        <div className="flex items-center gap-x-4 mt-2">
          <Headerinfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={address}
          />
          <Headerinfo
            Icon={
              <BsTerminalFill
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={experience}
          />
          <Headerinfo
            Icon={
              <IoIosSchool
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={education}
          />
        </div>
      </div>
    </div>
  );
}
