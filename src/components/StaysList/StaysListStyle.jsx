import styled from "styled-components";
import { devices } from "../../utils/mediaQueries";

export const Container = styled.div`
  padding-top: 90px;
  width: 100%;
  max-width: 1250px;
  margin-top: 32px;
  margin-bottom: 100px;
  @media ${devices.mobileL} {
    margin-top: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin: 24px 0;
  @media ${devices.mobileL} {
    font-size: 24px;
    margin: 36px 0;
  }
`;

export const StaysQuantity = styled.p``;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 32px;
`;
