import styled from 'styled-components';
import { Colors } from 'styles/Colors';

export const Table = styled.table`
  width: 100%;
  border: none;
  border: 1px solid ${Colors.greyTable};
  margin-bottom: 20px;
  background-color: ${Colors.white};
  padding: 40px;
  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.12);
  border-collapse: collapse;
`;

export const Head = styled.th`
  font-weight: 700px;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #42d1f5;
  font-size: 14px;
  border-left: 1px solid ${Colors.greyTable};
`;

export const Row = styled.tr`
  :nth-child(even) {
    background: #ede5e5;
  }
`;

export const Cell = styled.td`
  text-align: center;
  border-left: 1px solid ${Colors.greyTable};
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
  font-weight: 400px;

  :first-of-type {
    text-align: start;
    padding-left: 70px;
    width: calc(100% / 3);
  }
`;
