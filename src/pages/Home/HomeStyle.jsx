import styled from "styled-components";
import { devices } from "../../utils/mediaQueries";

export const Container = styled.div`
  padding: 16px;
  @media ${devices.mobileL} {
    padding: 32px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
