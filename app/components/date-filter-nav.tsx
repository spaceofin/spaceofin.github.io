"use client";

import React from "react";
import { usePostContext } from "../contexts/PostContext";
import dayjs from "dayjs";

function YearMonthItem({
  date = "",
  className = "",
  children,
}: {
  date?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { setSelectedDate } = usePostContext();
  return (
    <li
      className={`flex justify-center bg-indigo-800 bg-opacity-65 text-xl text-white font-mono rounded-md m-2 ml-0 px-6 gap-0.5 border-2 border-indigo-950 border-opacity-70 hover:cursor-pointer ${className}`}
      onClick={() => {
        setSelectedDate(date);
      }}>
      {children}
    </li>
  );
}

export function DateFilterNav({
  postDates,
  className,
}: {
  postDates: string[];
  className?: string;
}) {
  const formattedPostDatesSet = new Set<string>();
  postDates.forEach((postDate: string) =>
    formattedPostDatesSet.add(dayjs(postDate).format("YY-MM"))
  );
  const formattedPostDatesList = Array.from(formattedPostDatesSet);
  formattedPostDatesList.sort();

  return (
    <nav className="min-w-30 font-thin text-lg mr-6">
      <ul>
        <YearMonthItem className={className}>ALL</YearMonthItem>
        {formattedPostDatesList.map((date) => (
          <YearMonthItem key={date} date={date} className={className}>
            <span>{date.slice(0, 2)}</span>
            <span>-</span>
            <span>{date.slice(3)}</span>
          </YearMonthItem>
        ))}
      </ul>
    </nav>
  );
}
