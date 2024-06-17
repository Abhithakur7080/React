import React from "react";
import "./App.css";
import BasicTable from "./Components/BasicTable";
import FilteringTable from "./Components/FilteringTable";
import PaginationTable from "./Components/PaginationTable";
import RowSelection from "./Components/RowSelection";
import ColumnOrder from "./Components/ColumnOrder";
import ColumnHiding from "./Components/ColumnHiding";
import StickyColumn from "./Components/StickyColumn";

const App = () => {
  return (
    <div className="App">
      {/* <BasicTable/> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable/> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder/> */}
      {/* <ColumnHiding/> */}
      <StickyColumn/>
    </div>
  );
};

export default App;
