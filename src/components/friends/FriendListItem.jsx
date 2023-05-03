import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { Svg, Img, Name } from 'components/friends/Friends.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <>
      <Svg isOnline={isOnline}>
        <BsFillCircleFill size={16} />
      </Svg>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
