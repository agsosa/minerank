import { ICommunity, IListCommunity } from "@shared/types/entities/ICommunity";
import { GridOptions } from "ag-grid-community";
import { AgGridColumn, AgGridColumnProps, AgGridReact } from "ag-grid-react";
import { useState } from "react";
import AppHead from "src/components/common/AppHead";
import MainLayout from "src/components/common/MainLayout";
import DashboardFooter from "src/components/views/Dashboard/common/DashboardFooter";
import DashboardNav from "src/components/views/Dashboard/common/DashboardNav";

import { Container, Header, Content } from "./Communities.styled";

interface IColumn {
  field: keyof IListCommunity;
  sortable?: boolean;
  filter?: boolean;
}

const columnDefs: IColumn[] = [
  {
    field: "shortName",
    sortable: true,
    filter: true,
  },
  {
    field: "name",
    sortable: true,
    filter: true,
  },
  {
    field: "isApproved",
    sortable: true,
    filter: true,
  },
  {
    field: "isFeatured",
    sortable: true,
    filter: true,
  },
  {
    field: "createdAt",
    sortable: true,
    filter: true,
  },
  {
    field: "updatedAt",
    sortable: true,
    filter: true,
  },
];

const Communities = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const gridOptions: GridOptions = {
    // PROPERTIES
    // Objects like myRowData and myColDefs would be created in your application
    rowData,
    columnDefs,
    pagination: true,
    rowSelection: "multiple",

    // EVENTS
    // Add event handlers
    onRowClicked: (event) => console.log("A row was clicked"),
    onColumnResized: (event) => console.log("A column was resized"),
    onGridReady: (event) => {
      console.log("The grid is now ready");
    },
  };

  return (
    <MainLayout>
      <AppHead title="Communities - Dashboard - Minerank" />

      <DashboardNav />

      <Container>
        <Header>
          <h2>Communities</h2>
          <p>350 total - 50 active, 35 inactive, 15 featured</p>
        </Header>
        <Content>
          <div className="ag-theme-material" style={{ height: 400, width: "100%" }}>
            <AgGridReact gridOptions={gridOptions}></AgGridReact>
          </div>
        </Content>
      </Container>

      <DashboardFooter />
    </MainLayout>
  );
};

export default Communities;
