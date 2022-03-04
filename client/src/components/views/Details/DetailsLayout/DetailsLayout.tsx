import { Container } from "./DetailsLayout.styled";
import {FC} from "react";

const DetailsLayout: FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default DetailsLayout;
