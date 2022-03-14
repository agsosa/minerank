import AppHead from "src/components/common/AppHead";
import MainLayout from "src/components/common/MainLayout";
import DashboardFooter from "src/components/views/Dashboard/common/DashboardFooter";
import DashboardNav from "src/components/views/Dashboard/common/DashboardNav";

//http://angular-material.fusetheme.com/dashboards/project modern layout
const Dashboard = () => {
  return (
    <MainLayout>
      <AppHead title="Dashboard - Minerank - Servidores de Minecraft" />

      <DashboardNav />

      <div>hola</div>

      <DashboardFooter />
    </MainLayout>
  );
};

export default Dashboard;
