"use client";
import { FaCloudMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function DarkLight() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return null;
  }
  return (
    <div
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center z-[99999]"
    >
      <span
        className={classNames(
          "w-7 h-7 flex items-center justify-center bg-violet-700 rounded-full transition-all duration-500",
          {
            "ml-5": resolvedTheme === "dark",
          }
        )}
      >
        {resolvedTheme === "light" ? (
          <FaCloudMoon className="text-white" size={14} />
        ) : (
          <LuSunMoon className="text-white" size={14} />
        )}
      </span>
    </div>
  );
}
