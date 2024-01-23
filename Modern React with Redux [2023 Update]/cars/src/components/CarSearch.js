import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="searhc field id-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          type="text"
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default CarSearch;
