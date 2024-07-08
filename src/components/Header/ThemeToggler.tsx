import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from 'next/image'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    // Check for different operating systems
    if (platform.includes("win")) {
      setSystemTheme("light");
    } else if (platform.includes("mac")) {
      setSystemTheme("dark");
    } else if (userAgent.includes("linux")) {
      setSystemTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label='theme toggler'
      onClick={toggleTheme}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      {theme === "dark" || systemTheme === "dark" ? (
        <Image
      src="../../../public/images/dark.svg"
      alt="Landscape picture"
    />
      ) : (
        <Image
      src="../../../public/images/dark.svg"
      alt="Landscape picture"
    />
      )}
    </button>
  );
};

export default ThemeToggler;
