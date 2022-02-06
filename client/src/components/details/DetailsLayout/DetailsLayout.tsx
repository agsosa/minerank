import { Container } from "./DetailsLayout.styled";

const DetailsLayout: React.FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default DetailsLayout;
