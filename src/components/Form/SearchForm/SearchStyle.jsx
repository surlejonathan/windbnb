import styled from "styled-components";
import { MagnifyingGlass } from "@styled-icons/entypo";
import { devices } from "../../../utils/mediaQueries";
import colors from "../../../utils/colors";

export const Searchbar = styled.div`
  left: 39px;
  top: 75px;
  box-shadow: 0px 1px 6px ${colors.blackShadow};
  border-radius: 16px;
  display: flex;
  flex-direction: ${({ expanded }) => expanded && "column"};
  height: ${({ expanded }) => !expanded && "100%"};
  @media ${devices.tablet} {
    height: 100%;
    flex-direction: ${({ expanded }) => expanded && "row"};
  }
  font-size: 14px;
  font-family: "Mulish", sans-serif;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  &:first-child {
    border-bottom: ${({ expanded }) =>
      expanded && `1px solid ${colors.blackShadow}`};
  }
  flex: ${({ flex, expanded }) => (expanded ? "1" : `${flex}`)};
  border-right: ${({ border, expanded }) =>
    border && !expanded && `1px solid ${colors.blackShadow}`};
  display: ${({ button, expanded }) => (button && expanded ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${devices.tablet} {
    border-right: ${({ border }) =>
      border && `1px solid ${colors.blackShadow}`};
    &:first-child {
      border-bottom: none;
    }
    display: ${({ button, expanded }) => button && expanded && "flex"};
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 12px;
  left: 27px;
  font-size: 9px;
  font-weight: 800;
`;

export const Input = styled.input`
  &:focus-within {
    outline: thin solid black;
  }
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 16px;
  text-align: ${({ expanded }) => (expanded ? "left" : "center")};
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  padding: ${({ expanded }) => (expanded ? "24px 24px 10px 24px" : "12px")};
  cursor: pointer;
`;

export const ButtonIcon = styled(MagnifyingGlass)`
  color: ${({ expanded }) =>
    expanded ? `${colors.white}` : `${colors.primary}`}; ;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: ${({ expanded }) =>
    expanded ? `${colors.primary}` : "transparent"};
  box-shadow: ${({ expanded }) =>
    expanded ? `0px 1px 6px ${colors.blackShadow}` : "none"};
  border-radius: 16px;
  color: ${colors.white};
  border-color: transparent;
  height: 48px;
  width: ${({ expanded }) => (expanded ? "127px" : "auto")};
  cursor: pointer;
`;
