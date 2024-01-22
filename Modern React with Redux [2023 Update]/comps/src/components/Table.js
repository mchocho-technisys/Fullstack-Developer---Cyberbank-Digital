import React, { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {config.map((column) => {
            if (column.header) {
              return (
                <Fragment key={column.label}>{column.header(column)}</Fragment>
              );
            }
            return <th key={column.label}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => (
          <tr className="border-b" key={keyFn(rowData)}>
            {config.map((column) => (
              <td key={column.label} className="p-3">
                {column.render(rowData)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
