import PropTypes from 'prop-types';
import { StatisticsData } from 'components/statistics/StatisticsData';
import { Section, Title, List } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
          <StatisticsData key={stat.id} stat={stat} />
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
