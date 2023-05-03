import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friends/FriendListItem';
import { StyleList, StyleItem } from 'components/friends/Friends.styled';

export const FriendList = ({ items }) => {
  return (
    <StyleList>
      {items.map(item => (
        <StyleItem key={item.id}>
          <FriendListItem item={item} />
        </StyleItem>
      ))}
    </StyleList>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
