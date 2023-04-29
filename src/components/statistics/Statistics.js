import PropTypes from 'prop-types';
import { StatisticsData } from './StatisticsData';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatisticsData stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
