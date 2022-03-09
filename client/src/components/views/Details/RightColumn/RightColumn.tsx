import Comments from "./Comments";
import { Container, ContentCard, NameContainer, TitleContainer, Upvotes } from "./RightColumn.styled";
import Button from "@mui/material/Button";
import { FaArrowUp, FaFlag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCommunityState } from "src/state/community";
import { getCommunityCountryFlagComponent } from "src/utils/community.utils";
import { formatBigNumber } from "src/utils/misc.utils";

const RightColumn = () => {
  const { communityDetails } = useSelector(selectCommunityState);

  const { name, upvotes } = communityDetails!;
  const totalVotes = formatBigNumber(upvotes);
  const Flag = getCommunityCountryFlagComponent(communityDetails!);

  const onReportClick = () => {};

  return (
    <Container>
      <ContentCard>
        <TitleContainer>
          <NameContainer>
            <h2>{Flag && <Flag width={25} />} {name}{" "}</h2>

            <Upvotes>
              <FaArrowUp size={15} /> <span>{totalVotes}</span>
            </Upvotes>
          </NameContainer>

          <Button startIcon={<FaFlag />} color="error" size="small" onClick={onReportClick}>
            Reportar
          </Button>
        </TitleContainer>

        <p>Videos y fotos</p>

        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>

        <p>Click para Votar</p>

        <p>Redes sociales y links:</p>
        <p>discod etc</p>

        <p>Caracteristicas:</p>
        <p>Modos de juego: Factions, PVP Survival</p>
        <p>Versiones: v1.8, v1.9, v1.5</p>
        <p>No PREMIUM</p>

        <p>
          Estadisticas (uptime, grafico usuarios, promedio usuarios, usuarios en los ultimos x
          horas, etc, max usuarios record
        </p>
      </ContentCard>

      <Comments />
    </Container>
  );
};

export default RightColumn;
