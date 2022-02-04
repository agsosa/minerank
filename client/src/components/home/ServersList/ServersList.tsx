import ServerCard from "../../common/ServerCard";
import { Container } from "./ServersList.styled";

const ServersList = () => {
  return (
    <Container>
      <ServerCard />
      <ServerCard />
      <ServerCard />
      <ServerCard />
      <ServerCard />
    </Container>
  );
};

export default ServersList;
