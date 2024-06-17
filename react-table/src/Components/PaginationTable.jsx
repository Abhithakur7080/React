import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../assets/MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "../assets/columns";
import "./table.css";

const PaginationTable = () => {
  //optimization
  const columns = useMemo(() => COLUMNS, []);
  //for grouped columns
  // const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //useTable props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows, remove when pagination
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage, // direct jump on that page
    pageCount,
    setPageSize, // to set no of rows by default 10 rows but we can change
    state,
    prepareRow,
  } = useTable(
    {
      columns: columns,
      data: data,
      initialState: { // default page index is 0 but when we want to goto a default page index here 2 + 1 = 3rd page shown by default
        pageIndex: 2
      }
    },
    usePagination
  );
  const { pageIndex, pageSize } = state
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
            | Go to Page: {" "}
            <input type="number" defaultValue={pageIndex + 1} onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }} style={{width: "50px"}}/>
        </span>
        <select value={pageSize} onChange={e => setPageSize(e.target.value)}>
            {
                [10, 25, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))
            }
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  );
};

export default PaginationTable;
