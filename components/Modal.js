import Image from "next/image";
import { MdClose } from "react-icons/md";
import SkillComponent from "./SkillComponent";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { useEffect } from "react";

export default function Modal({ state, details, toggleModal }) {
  useEffect(() => {
    document.body.style.overflow = state ? "hidden" : "visible";
  });
  return state ? (
    <div className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[999999] flex items-center justify-center">
      <MdClose
        onClick={toggleModal}
        className="cursor-pointer text-[25px] absolute top-6 right-6 text-black dark:text-white"
      />
      <div className="max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700 max-h-[80vh] overflow-x-auto">
        <div className="flex flex-wrap lg:space-x-6">
          <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
            <div className="pt-[56.25%]">
              <Image
                src={details.image}
                sizes="auto"
                width={0}
                height={0}
                className="w-full h-full absolute inset-0"
                alt={details.title}
              />
            </div>
          </div>
          <div className="flex-1 mt-5 lg:mt-0">
            <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-400 font-bold ">
              {details.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {details.skills.map((skill) => (
                <SkillComponent skill={skill} key={skill.id} />
              ))}
            </div>
            <div className="flex flex-grap items-center gap-3 mt-3">
              <Link
                href={details.source_code}
                target="_blank"
                className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
              >
                <FaGithub size={18} className="text-black dark:text-white" />
                <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  source code
                </span>
              </Link>
              <Link
                href={details.demo}
                target="_blank"
                className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
              >
                <TfiWorld size={18} className="text-black dark:text-white" />
                <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  demo
                </span>
              </Link>
            </div>
            <p className="text-base font-medium text-zinc-700 dark:text-zinc-400 leading-[20px] mt-6">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
