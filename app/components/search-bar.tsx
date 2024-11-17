"use client";

import { MdCancel } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancelClick = () => {
    setInputValue("");
    router.push("/");
  };

  const handleSearchClick = () => {
    if (inputValue === "") router.push("/");
    else router.push(`?searchTerm=${inputValue}`);
  };

  return (
    <div className="flex flex-col mx-5 md:mx-10 2xl:mx-16 gap-4 mt-5 mb-20">
      <label className="text-2xl ml-4">Search Bar</label>
      <div className="flex w-full gap-2 items-center">
        <input
          className="flex w-full text-xl px-2 py-2 rounded-md border-2 border-slate-800 border-opacity-90 box-border"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsFocused(false);
            }, 100)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        />
        <div onClick={handleSearchClick}>
          <FcSearch size={40} className="cursor-pointer" />
        </div>
        {isFocused ? (
          <div onClick={handleCancelClick}>
            <MdCancel size={36} className="cursor-pointer" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
