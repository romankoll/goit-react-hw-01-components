import PropTypes from 'prop-types';
import css from 'components/friendList/FriendList.module.css';
import { FaDog } from 'react-icons/fa';

export const FriendList = ({ friends }) => {
  const getIconColor = isOnline => {
    return isOnline ? 'green' : 'red';
  };

  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FaDog
            className={css.icon}
            style={{ color: getIconColor(friend.isOnline) }}
          />
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
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
