import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = '#0f172a';
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = 'white';
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark"); // toggle возвращает true, если класс добавлен
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.style.backgroundColor = isDark ? '#0f172a' : 'white';
  };

  return (
    <div className="flex flex-col items-center relative text-black dark:text-gray-100">
      <button
        onClick={toggleTheme}
        className="absolute left-0 top-2 md:top-3 cursor-points dark:cursor-dark-points"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <img src="/sun.png" alt="Sun icon" className="w-6 md:w-9" />
        ) : (
          <img src="/moon.png" alt="Moon icon" className="w-6 md:w-8" />
        )}
      </button>
      <h1 className="text-3xl md:text-6xl">Lala Hashimova</h1>
      <h2 className="text-xl md:text-3xl">frontend developer</h2>
      <a
        href="/LalaHashimCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-amber-300 dark:bg-pink-700 hover:shadow-lg dark:hover:shadow-gray-800 cursor-points dark:cursor-dark-points text-lg mt-1 py-0.5 px-2 md:py-1 md:px-2.5 md:mt-3 md:text-xl"
      >
        View CV
      </a>
    </div>
  );
}

