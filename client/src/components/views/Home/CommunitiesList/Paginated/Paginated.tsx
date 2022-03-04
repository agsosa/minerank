import CommunityCard from "src/components/common/CommunityCard";
import { Grid, FeaturedTitle, Section } from "../CommunitiesList.styled";
import { FaList } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectCommunityState, getCommunities } from "src/state/community";

const Paginated = () => {
  const dispatch = useDispatch();
  const { maxPage, page, communities } = useSelector(selectCommunityState);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(getCommunities(value));
  };

  return (
    <Section>
      <FeaturedTitle>
        <FaList />
        <h2>Servidores de Minecraft</h2>
      </FeaturedTitle>
      <p>Filtros aplicados: Roleplay PVP, 1.8, no premium, "nombre del servidor"</p>
      <Grid>
        {communities.map((community, idx) => (
          <CommunityCard community={community} key={idx} />
        ))}
      </Grid>

      <Pagination
        sx={{ alignSelf: "center" }}
        page={page}
        count={maxPage}
        color="primary"
        onChange={onPageChange}
      />
    </Section>
  );
};

export default Paginated;
