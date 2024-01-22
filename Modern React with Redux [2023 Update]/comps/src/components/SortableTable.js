import React from "react";
import Table from "./Table";
import useSort from "../hooks/useSort";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";

const SortableTable = (props) => {
  const { sortedData, sorting, sortBy, sortOrder } = useSort(
    props.config,
    props.data
  );

  const makeThSorteable = props.config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => sorting(column.label)}
          >
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
    return column;
  });

  return (
    <div>
      <Table {...props} config={makeThSorteable} data={sortedData} />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <VscArrowSmallUp />
        <VscArrowSmallDown />
      </div>
    );
  }

  switch (sortOrder) {
    case null:
      return (
        <div>
          <VscArrowSmallUp />
          <VscArrowSmallDown />
        </div>
      );
    case "asc":
      return <VscArrowSmallUp />;
    case "desc":
      return <VscArrowSmallDown />;
    default:
      break;
  }
};

export default SortableTable;
