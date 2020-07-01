import React from "react";
import { RiSearchLine } from "react-icons/ri";

import "./SearchInput.css";
import { COLORS } from "../../constants/colors";

const SearchInput = () => {
  const { green, white } = COLORS;

  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="search-input"
      />
      <RiSearchLine
        size={20}
        className="search-icon"
        style={{ backgroundColor: green, color: white }}
      />
    </div>
  );
};

export default SearchInput;
