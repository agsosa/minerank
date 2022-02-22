import type { NextPage } from "next";
import AppHead from "src/components/common/AppHead";
import MainLayout from "src/components/common/MainLayout";
import DashboardFooter from "src/components/views/Dashboard/DashboardFooter";
import DashboardNav from "src/components/views/Dashboard/DashboardNav";
import DetailsLayout from "src/components/views/DetailsPage/DetailsLayout";

//http://angular-material.fusetheme.com/dashboards/project modern layout
const EditPage: NextPage = () => {
  return (
    <MainLayout>
      <AppHead title="Dashboard - Minerank - Servidores de Minecraft" />

      <DashboardNav />

      <div>hola</div>

      <DashboardFooter />
    </MainLayout>
  );
};

export default EditPage;
