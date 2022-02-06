import { CONTENT_WIDTH } from "src/utils/style.utils";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  ${CONTENT_WIDTH}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const FeaturedGrid = styled(Grid)`
  grid-template-columns: repeat(1, 1fr);
`;

export const FeaturedTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PromoBox = styled.p`
  border: 1px solid #ffc037;
  background-color: #fff8dc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
`;

export const Section = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;