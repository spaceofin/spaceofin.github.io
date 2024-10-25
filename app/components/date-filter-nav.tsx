"use client";

import React from "react";
import { usePostContext } from "../contexts/PostContext";
import dayjs from "dayjs";

export function DateFilterNav({ postDates }: { postDates: string[] }) {
  const { setSelectedDate } = usePostContext();

  const formattedPostDatesSet = new Set<string>();
  postDates.forEach((postDate: string) =>
    formattedPostDatesSet.add(dayjs(postDate).format("YY-MM"))
  );
  const formattedPostDatesList = Array.from(formattedPostDatesSet);
  formattedPostDatesList.sort();

  return (
    <nav className="min-w-30 font-thin text-lg mr-6">
      <ul>
        <li
          className="flex justify-center bg-indigo-800 bg-opacity-65
                     text-xl text-white font-mono rounded-md m-2 ml-0 px-6 gap-0.5 border-2 border-indigo-950 border-opacity-70 hover:cursor-pointer"
          onClick={() => {
            setSelectedDate("");
          }}>
          ALL
        </li>
        {formattedPostDatesList.map((date) => (
          <li
            className="flex justify-center bg-indigo-800 bg-opacity-65
                     text-xl text-white font-mono rounded-md m-2 ml-0 px-6 gap-0.5 border-2 border-indigo-950 border-opacity-70 hover:cursor-pointer"
            key={date}
            onClick={() => {
              setSelectedDate(date);
            }}>
            <span>{date.slice(0, 2)}</span>
            <span>-</span>
            <span>{date.slice(3)}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
