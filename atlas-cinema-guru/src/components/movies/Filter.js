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
    "Action", "Drama", "Comedy", "Biography", "Romance",
    "Thriller", "War", "History", "Sport", "Sci-Fi",
    "Documentary", "Crime", "Fantasy"
  ];

  return (
    <div className="filter-container">
      <div className="filter-controls">
        <SearchBar title={title} setTitle={setTitle} />
        <div className="year-inputs">
          <Input
            label="Min Date:"
            type="number"
            className="year-input"
            value={minYear}
            setValue={setMinYear}
            inputAttributes={{ placeholder: "1970" }}
          />
          <Input
            label="Max Date:"
            type="number"
            className="year-input"
            value={maxYear}
            setValue={setMaxYear}
            inputAttributes={{ placeholder: "2022" }}
          />
        </div>
        <SelectInput
          label="Sort:"
          className="sort-select"
          value={sort}
          setValue={setSort}
          options={[
            { value: "default", label: "Default" },
            { value: "latest", label: "Latest" },
            { value: "oldest", label: "Oldest" },
            { value: "highestrated", label: "Highest Rated" },
            { value: "lowestrated", label: "Lowest Rated" },
          ]}
        />
      </div>
      <div className="tags-list">
        {tags.map((tag) => (
          <Tag
            key={tag}
            genre={tag}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
