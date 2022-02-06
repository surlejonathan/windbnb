import styled from "styled-components";
import { LocationPin } from "@styled-icons/entypo";
import { MinusSquare, PlusSquare } from "@styled-icons/feather/";
import { devices } from "../../../utils/mediaQueries";
import colors from "../../../utils/colors";

export const SelectContainer = styled.div`
  display: flex;
  font-family: Mulish;
`;

export const SelectWrapper = styled.div`
  display: ${({ isActive, expanded }) =>
    expanded && isActive ? "block" : "none"};
  opacity: ${({ isActive, expanded }) => (expanded && isActive ? "1" : "0")};
  transition: opacity 0.3s;
  padding: 32px 24px;
  flex: ${({ isActive, expanded }) => (expanded && isActive ? "1" : "0")};
  @media ${devices.tablet} {
    display: block;
    flex: 1;
    visibility: ${({ isActive, expanded }) =>
      expanded && isActive ? "visible" : "hidden"};
  }
`;

export const SelectLabel = styled.h3`
  font-weight: 600;
  font-size: 14px;
  margin-top: 16px;
`;

export const SelectElement = styled.p`
  cursor: pointer;

  padding: 16px 0;
  background: ${({ selected }) => selected && "lightgray"};
  color: ${colors.darkGray};
`;
export const LocationIcon = styled(LocationPin)`
  color: ${colors.darkGray};
`;

export const Minus = styled(MinusSquare)`
  color: ${colors.gray};
  cursor: pointer;
`;
export const Plus = styled(PlusSquare)`
  color: ${colors.gray};
  cursor: pointer;
`;

export const Count = styled.span`
  margin: 0 10px;
  font-weight: 700;
  font-size: 14px;
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.tablet} {
    align-items: flex-start;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0;
`;

export const CountButton = styled.button`
  border: none;
  background: transparent;
`;
