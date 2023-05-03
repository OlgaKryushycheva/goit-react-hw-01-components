import styled from 'styled-components';
import { Colors } from 'components/Colors';

export const StyleProfile = styled.div`
  font-size: 25px;
  text-align: center;
  color: ${Colors.grey};
  padding-top: 40px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  outline: 1px solid ${Colors.grey};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: contain;
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.p`
  font-size: 36px;
  text-align: center;
  color: ${Colors.black};
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  margin-bottom: 15px;
`;

export const Location = styled.p`
  margin-bottom: 50px;
`;

export const Stats = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: rgb(199, 193, 193);
`;

export const Item = styled.li`
  flex-basis: calc(100% / 3);
  padding: 20px 0px 20px;
  outline: 1px solid ${Colors.grey};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 15px;
`;

export const Quantity = styled.span`
  display: block;
  color: ${Colors.black};
  font-size: 25px;
`;
