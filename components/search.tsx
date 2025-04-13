"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {
  onSearch: (value: string) => void;
};

const Search = ({ onSearch }: Props) => {
  return (
    <div className="relative">
    <Input
      type="text"
      placeholder="Поиск..."
      onChange={(e) => onSearch(e.target.value)}
      className="pl-8"
    />
    <SearchIcon className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
    
    </div>
    
  );
};

export default Search;
