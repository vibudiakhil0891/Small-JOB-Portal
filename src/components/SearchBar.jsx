import React from "react";

function SearchBar({ setSearch }) {
  return (
    <input
      className="w-full p-2 border rounded mb-4"
      placeholder="Search jobs..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
