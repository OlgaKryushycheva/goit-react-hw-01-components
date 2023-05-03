import PropTypes from 'prop-types';
import { Label, Percentage } from 'components/statistics/Statistics.styled';

export const StatisticsData = ({ stat: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};

StatisticsData.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
