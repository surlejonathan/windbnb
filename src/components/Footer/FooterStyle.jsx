import styled from "styled-components";
import { devices } from "../../utils/mediaQueries";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  padding-bottom: 32px;
  bottom: 0;
`;

export const Info = styled.p`
  color: ${colors.gray};
  font-size: 12px;
  @media ${devices.mobileM} {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  font-weight: 700;
`;
