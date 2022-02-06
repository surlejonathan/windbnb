import styled from "styled-components";
import { MagnifyingGlass, LocationPin } from "@styled-icons/entypo";
import colors from "../../utils/colors";

export const Container = styled.div`
  background: ${({ isOpen }) =>
    isOpen ? "rgba(79, 79, 79, 0.5)" : "rgba(79, 79, 79, 0)"};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  font-family: "Mulish", sans-serif;
  transition: all 0.8s ease-out;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  background: ${colors.white};
  transition: all 0.3s ease-in-out;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 1248px;
  height: 55px;
  box-shadow: 0px 1px 6px ${colors.blackShadow};
  border-radius: 16px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.3s ease-out;
`;

export const InputGroup = styled.div`
  flex: 1;
  height: 100%;
  border-right: ${({ border }) => border && `1px solid ${colors.gray}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 16px;
  padding: 24px;
  padding-bottom: 10px;
  font-family: "Mulish", sans-serif;
  font-size: 14px;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 12px;
  left: 27px;
  font-size: 9px;
  font-weight: 800;
`;

export const SearchButton = styled.button`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 14px;
  background: ${colors.primary};
  box-shadow: 0px 1px 6px ${colors.blackShadow};
  border-radius: 16px;
  color: ${colors.white};
  border-color: transparent;
  padding: 10px 24px;
  cursor: pointer;
`;

export const ButtonIcon = styled(MagnifyingGlass)`
  margin-right: 10px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  max-width: 1248px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SelectWrapper = styled.div`
  //  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

export const SelectElement = styled.p`
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  background: ${({ selected }) => selected && `${colors.gray}`};
`;

export const LocationIcon = styled(LocationPin)``;
