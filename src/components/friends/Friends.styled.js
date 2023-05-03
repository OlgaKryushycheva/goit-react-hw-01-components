import styled from 'styled-components';
import { Colors } from 'styles/Colors';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 20px;
  background-color: ${Colors.white};
`;

export const Item = styled.li`
  display: flex;
  gap: 15px;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.12);
  align-items: center;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    scale: 1.02;
  }
`;

export const Svg = styled.span`
  color: ${props => {
    return props.isOnline ? '#34eb49' : '#f25ea6';
  }};
`;

export const Img = styled.img`
  border-radius: 20%;
  object-fit: contain;
  outline: 1px solid ${Colors.grey};
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
