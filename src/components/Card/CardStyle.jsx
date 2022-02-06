import styled from "styled-components";
import { StarFill } from "@styled-icons/bootstrap";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 395px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 269px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const Type = styled.div`
  color: ${colors.gray};
  font-size: 14px;
  padding: 4px 0;
  flex: 1;
`;
export const SuperHost = styled.span`
  border: 1px solid black;
  border-radius: 12px;
  font-size: 12px;
  color: ${colors.text};
  font-weight: 700;
  padding: 4px 8px;
  margin-right: 10px;
`;
export const Rating = styled.div`
  font-size: 14px;
  padding: 4px 0;
  display: flex;
  align-items: center;
`;
export const Star = styled(StarFill)`
  color: ${colors.primary};
  margin-right: 10px;
`;

export const TitleContainer = styled.div`
  font-weight: 600;
  padding: 5px 0;
`;
