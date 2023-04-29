import PropTypes from 'prop-types';

export const StatisticsData = ({ stat: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};

StatisticsData.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
