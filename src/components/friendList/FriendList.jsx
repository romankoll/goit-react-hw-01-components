import PropTypes from 'prop-types';
import css from 'components/friendList/FriendList.module.css';
import { FriendItem } from 'components/FriendItem/FriendItem';
export const FriendList = ({ friends }) => {
  // const getIconColor = isOnline => {
  //   return isOnline ? 'green' : 'red';
  // };

  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem
          key={id}
          // id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
