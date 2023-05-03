import styled from 'styled-components';
import { Colors } from 'components/Colors';

export const Section = styled.section`
  padding-top: 40px;
  margin-bottom: 20px;
  background-color: ${Colors.white};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  color: ${Colors.grey};
  padding-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  color: ${Colors.white};
  text-align: center;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 5);
  padding-top: 20px;
  padding-bottom: 30px;
  background-color: ${props => {
    switch (props.value) {
      case 'id-1':
        return '#42eff5';
      case 'id-2':
        return '#6ef5b6';
      case 'id-3':
        return '#6ec1f5';
      case 'id-4':
        return '#6ef596';
      case 'id-5':
        return '#c79cf0';
      default:
        return 'cornflowerblue';
    }
  }};
`;

export const Label = styled.span`
  font-size: 25px;
  font-weight: 400;
  display: block;
`;

export const Percentage = styled.span`
  font-size: 35px;
  font-weight: 400;
  display: block;
`;
