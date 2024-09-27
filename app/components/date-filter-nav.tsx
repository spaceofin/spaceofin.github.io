"use client";

import React from "react";

export function DateFilterNav({ postDates }: { postDates: string[] }) {
  const dateSet = new Set<string>();

  postDates.forEach((postDate: string) => {
    const date = new Date(postDate);
    const yearMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;
    dateSet.add(yearMonth);
  });

  const dateList = Array.from(dateSet).map((date) => {
    const [year, month] = date.split("-");
    return { year: parseInt(year.slice(-2)), month: parseInt(month) };
  });

  dateList.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.month - b.month;
  });

  return (
    <nav className="min-w-30 font-thin text-lg mr-6">
      <ul>
        {dateList.map(({ year, month }) => (
          <li
            className="flex justify-center bg-indigo-800 bg-opacity-65
             text-xl text-white font-mono rounded-md m-2 ml-0 px-6 gap-0.5 border-2 border-indigo-950 "
            key={`${year}-${month}`}
            onClick={() => {
              console.log(`clicked: ${year}-${month}`);
            }}>
            <span>{year}</span>
            <span>-</span>
            <span>{month < 10 ? `0${month}` : month}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
