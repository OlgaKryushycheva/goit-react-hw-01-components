import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
