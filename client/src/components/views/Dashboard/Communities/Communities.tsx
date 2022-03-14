import AppHead from "src/components/common/AppHead";
import MainLayout from "src/components/common/MainLayout";
import DashboardFooter from "src/components/views/Dashboard/common/DashboardFooter";
import DashboardNav from "src/components/views/Dashboard/common/DashboardNav";

const Communities = () => {
  return (
    <MainLayout>
      <AppHead title="Communities - Dashboard - Minerank" />

      <DashboardNav />

      <div>Comunidades</div>

      <DashboardFooter />
    </MainLayout>
  );
};

export default Communities;
