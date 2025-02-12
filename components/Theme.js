"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Theme({ children }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return null;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
