import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { Item, Svg, Img, Name } from 'components/friends/Friends.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Svg isOnline={isOnline}>
        <BsFillCircleFill size={16} />
      </Svg>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
