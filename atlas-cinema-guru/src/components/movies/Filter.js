import React from "react";
import "./movies.css";
import SearchBar from "../general/SearchBar";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  const tags = [
    "action", "drama", "comedy", "biography", "romance",
    "thriller", "war", "history", "sport", "sci-fi",
    "documentary", "crime", "fantasy"
  ];

  return (
    <div className="filter-container">
      <SearchBar title={title} setTitle={setTitle} />
      <Input
        label="Min Year"
        type="number"
        className="year-input"
        value={minYear}
        setValue={setMinYear}
      />
      <Input
        label="Max Year"
        type="number"
        className="year-input"
        value={maxYear}
        setValue={setMaxYear}
      />
      <SelectInput
        label="Sort By"
        className="sort-select"
        value={sort}
        setValue={setSort}
        options={[
          { value: "latest", label: "Latest" },
          { value: "oldest", label: "Oldest" },
          { value: "highestrated", label: "Highest Rated" },
          { value: "lowestrated", label: "Lowest Rated" },
        ]}
      />
      <ul className="tags-list">
        {tags.map((tag) => (
          <Tag
            key={tag}
            genre={tag}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
