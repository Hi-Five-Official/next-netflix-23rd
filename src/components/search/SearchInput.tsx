"use client";

import { memo } from "react";

import { ThinSearchIcon, XIcon } from "@/assets/icons";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const SearchInput = memo(({ value, onChange, onClear }: SearchInputProps) => {
  return (
    <div className="flex h-13 w-full items-center justify-between gap-5.25 bg-gray-800 px-5">
      <div className="flex w-full items-center gap-2">
        <ThinSearchIcon className="size-5 text-gray-600" />
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Search for a show, movie, genre, e.t.c."
          className="text-label-2 w-full px-3.5 text-white outline-none placeholder:text-gray-600"
        />
      </div>
      <div className="flex items-center">
        <button onClick={onClear} type="button">
          <XIcon className="size-4 cursor-pointer text-gray-600" />
        </button>
      </div>
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
