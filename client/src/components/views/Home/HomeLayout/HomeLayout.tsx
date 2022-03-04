import { Container } from "./HomeLayout.styled";

const HomeLayout: React.FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default HomeLayout;
