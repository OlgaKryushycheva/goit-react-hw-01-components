import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friends/FriendListItem';
import { List } from 'components/friends/Friends.styled';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <FriendListItem key={item.id} item={item} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
