"use client";

import { SearchIcon, XIcon } from "@/assets/icons";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchInput({ value, onChange, onClear }: SearchInputProps) {
  return (
    <div className="flex h-13 w-full items-center justify-between gap-[21px] bg-gray-800 px-5">
      <div className="flex w-full items-center gap-2">
        <SearchIcon className="size-5 text-gray-600" />
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Search for a show, movie, genre, e.t.c."
          className="text-label-2 w-full px-[14px] text-white outline-none placeholder:text-gray-600"
        />
      </div>
      <div className="flex items-center">
        <button onClick={onClear} type="button">
          <XIcon className="size-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
