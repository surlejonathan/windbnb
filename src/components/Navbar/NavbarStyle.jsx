import styled from "styled-components";
import { devices } from "../../utils/mediaQueries";
import { Close } from "@styled-icons/material";
import colors from "../../utils/colors";

export const Nav = styled.nav`
  height: ${({ expanded }) => (expanded ? "100vh" : "0px")};
  max-height: 632px;
  position: ${({ expanded }) => (expanded ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ expanded }) => (expanded ? "16px 16px 0px 16px" : "16px")};
  @media (orientation: landscape) and (max-height: 600px) {
    height: ${({ expanded }) => (expanded ? "100vh" : "0px")};
  }

  @media ${devices.tablet} and (min-height: 601px) {
    padding: ${({ expanded }) => (expanded ? "93px 32px 0px 32px" : "32px")};
    height: ${({ expanded }) => (expanded ? "auto" : "0px")};
  }
  background: ${({ expanded }) =>
    expanded ? `${colors.white}` : "transparent"};
  transition: all 0.3s;
  transition-delay: 0.1s;
  overflow-y: ${({ expanded }) => expanded && "auto"};
`;

export const EditContainer = styled.div`
  display: ${({ expanded }) => (expanded ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  margin: 18px 0;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 14px;
  position: relative;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  position: absolute;
  right: -5px;
`;

export const NavContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${devices.tablet} {
    display: block;
    height: auto;
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  @media ${devices.mobileL} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  width: 0;
  margin-bottom: ${({ expanded }) => !expanded && "32px"};
  cursor: pointer;
  @media ${devices.mobileL} {
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  display: ${({ expanded }) => expanded && "none"};
`;

export const Right = styled.div`
  max-width: ${({ expanded }) => (expanded ? "100%" : "320px")};
  width: 100%;
  height: ${({ expanded }) => (expanded ? "100%" : "55px")};
  transition: width 0.3s;
  margin: 0 auto;
  @media ${devices.mobileL} {
    margin: 0;
  }
`;

export const MobileSearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 24px;
`;

export const MobileSearchButton = styled.button`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  justify-content: center;
  align-items: center;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: ${colors.primary};
  box-shadow: 0px 1px 6px ${colors.blackShadow};
  border-radius: 16px;
  color: ${colors.white};
  border-color: transparent;
  height: 48px;
  width: 127px;
  cursor: pointer;
  margin: 24px auto;
  @media ${devices.tablet} {
    display: none;
  }
`;
