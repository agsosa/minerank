import { Container } from "./MainLayout.styled";

const MainLayout: React.FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default MainLayout;
