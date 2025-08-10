"use client";

import { useEffect, useState } from "react";

async function fetchGitHubContributions(username: string, from: string, to: string) {
  const query = `
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username, from, to },
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.data || !data.data.user) {
    console.error("Error fetching GitHub contributions:", data);
    throw new Error("Failed to fetch GitHub contributions");
  }

  return data.data.user.contributionsCollection.contributionCalendar;
}

export default function ContributionGraph() {
  const [calendarData, setCalendarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const username = "sahiwl";
      const from = new Date(
        new Date().setFullYear(new Date().getFullYear() - 1)
      ).toISOString();
      const to = new Date().toISOString();

      const data = await fetchGitHubContributions(username, from, to);
      setCalendarData(data);
    };

    fetchData();
  }, []);

  if (!calendarData) {
    return <div>Loading...</div>;
  }

  const getColor = (contributionCount: number) => {
    if (contributionCount === 0) return "bg-neutral-300 dark:bg-spaceblack border border-neutral-400 dark:border-neutral-800";
    if (contributionCount < 3) return "bg-[#4e201c] dark:bg-[#00ADB5]";
    if (contributionCount < 5) return "bg-[#7a2d26] dark:bg-[#007991]";
    if (contributionCount < 7) return "bg-[#a33b30] dark:bg-[#005f73]";
    return "bg-[#cc493a] dark:bg-[#003f5c]";
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
      <div className="flex flex-wrap gap-1">
        {calendarData.weeks.map((week: any, weekIndex: number) =>
          week.contributionDays.map((day: any, dayIndex: number) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`w-4 h-4 rounded-sm ${getColor(day.contributionCount)}`}
              title={`${day.date}: ${day.contributionCount} contributions`}
            />
          ))
        )}
      </div>
      <p className="mt-4">
        Total Contributions: {calendarData.totalContributions}
      </p>
    </div>
  );
}