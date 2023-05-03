import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friends/FriendListItem';
import { List, Item } from 'components/friends/Friends.styled';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <FriendListItem item={item} />
        </Item>
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
