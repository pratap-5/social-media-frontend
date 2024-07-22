import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

function Search() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/profile/search/${search}`);
      }}
      className="md:w-[600px]  w-[300px]  h-[50px] relative text-black   "
    >
      <input
        className=" outline-none  input bg-[#eee]  w-full h-full px-2 rounded-2xl "
        value={search}
        type="text"
        placeholder="search "
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="absolute right-2  top-0   h-full flex items-center justify-center">
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
