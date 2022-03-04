import { Container } from "./CommunitiesList.styled";
import Featured from "./Featured";
import Latest from "./Latest";
import Paginated from "./Paginated";

const CommunitiesList = () => {
  return (
    <Container>
      <Featured />
      <Paginated />
      <Latest />
    </Container>
  );
};

export default CommunitiesList;
