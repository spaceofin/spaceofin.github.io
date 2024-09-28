"use client";

import React, { createContext, useContext, useState } from "react";

type PostContextType = {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <PostContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
      }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("context is undefined!");
  }
  return context;
};
