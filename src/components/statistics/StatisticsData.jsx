import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Percentage,
} from 'components/statistics/Statistics.styled';

export const StatisticsData = ({ stat: { label, percentage, id } }) => {
  return (
    <Item value={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatisticsData.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
