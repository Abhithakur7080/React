import React, { useMemo } from "react";
import { useTable, useBlockLayout } from "react-table";
import { useSticky } from "react-table-sticky";
import MOCK_DATA from "../assets/MOCK_DATA.json";
import { COLUMNS } from "../assets/columns";
import "./table.css";
import { Styles } from "./Table.styled";

const StickyColumn = () => {
  //optimization
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //useTable props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useBlockLayout,
    useSticky
  );
  const firstPageRows = rows.slice(0, 50)
  return (
    <Styles>
    <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
      <div className="header">
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()} className="th">
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className="body">
        {firstPageRows.map((row) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map((cell) => (
                <div {...cell.getCellProps()} className="td">
                  {cell.render('Cell')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="footer">
        {footerGroups.map((footerGroup) => (
          <div {...footerGroup.getHeaderGroupProps()} className="tr">
            {footerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()} className="td">
                {column.render('Footer')}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Styles>
  );
};

export default StickyColumn;
