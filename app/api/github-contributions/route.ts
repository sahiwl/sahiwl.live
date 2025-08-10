import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
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

  const username = "sahiwl";
  const from = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString();
  const to = new Date().toISOString();

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
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
      return NextResponse.json({ error: "Failed to fetch GitHub contributions" }, { status: 500 });
    }

    return NextResponse.json(data.data.user.contributionsCollection.contributionCalendar);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
