import { IFindAllCommunitiesResponseDto } from "@shared/types/dtos/community.dto";
import { IListCommunity } from "@shared/types/entities/ICommunity";
import { GridOptions } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useRef, useState } from "react";
import AppHead from "src/components/common/AppHead";
import MainLayout from "src/components/common/MainLayout";
import DashboardFooter from "src/components/views/Dashboard/common/DashboardFooter";
import DashboardNav from "src/components/views/Dashboard/common/DashboardNav";
import communityService from "src/services/community.service";

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
    field: "upvotes",
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
  const gridRef = useRef<any>(null);
  const [data, setData] = useState<IFindAllCommunitiesResponseDto | null>(null);

  const gridOptions: GridOptions = {
    rowData: data?.items,
    columnDefs,
    pagination: true,
    rowSelection: "multiple",
    paginationPageSize: 15,

    onRowClicked: (event) => console.log("A row was clicked"),
    onColumnResized: (event) => console.log("A column was resized"),
    onGridReady: (event) => {
      fetchData();
    },
  };

  const fetchData = async () => {
    gridRef.current.api.showLoadingOverlay();

    const { data } = await communityService.fetchAllCommunities();
    setData(data);

    gridRef.current.api.hideOverlay();
  };

  return (
    <MainLayout>
      <AppHead title="Communities - Dashboard - Minerank" />

      <DashboardNav />

      <Container>
        <Header>
          <h2>Communities</h2>
          {data && (
            <p>
              {data.total} total - {data.approved} approved, {data.unapproved} unapproved,{" "}
              {data.featured} featured
            </p>
          )}
          {!data && <p>Loading...</p>}
        </Header>
        <Content>
          <div className="ag-theme-material" style={{ height: 400, width: "100%" }}>
            <AgGridReact
              ref={gridRef}
              gridOptions={gridOptions}
              rowData={data?.items}
              columnDefs={columnDefs}
            ></AgGridReact>
          </div>
        </Content>
      </Container>

      <DashboardFooter />
    </MainLayout>
  );
};

export default Communities;
