"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";

export const github: any = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(2024);
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const username = "sahiwl";
  const years = [2025, 2024, 2023, 2022]; // List of years to display

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* GitHub Contributions Graph */}
      <div className="border dark:border-zinc-800 border-zinc-200 p-4 md:p-8 rounded-lg max-w-full overflow-x-auto">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme={serverTheme}
          blockSize={8} // Reduced block size for smaller screens
          year={calendarYear}
          style={{
            color: serverTheme === "light" ? "black" : "white",
          }}
        />
      </div>

      {/* Years Grid at the Bottom */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        {years.map((year) => (
          <div
            key={year}
            className={`text-gray-600 dark:text-gray-400 text-sm hover:text-black dark:hover:text-white cursor-pointer ${
              calendarYear === year ? "text-black dark:text-white font-bold" : ""
            }`}
            onClick={() => setCalendarYear(year === calendarYear ? undefined : year)}
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
}