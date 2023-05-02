import PropTypes from 'prop-types';
import css from 'components/friendList/FriendList.module.css';
import { FaDog } from 'react-icons/fa';

export const FriendItem = ({ isOnline, avatar, name }) => {
  const getIconColor = isOnline => {
    return isOnline ? 'green' : 'red';
  };
  return (
    <li className={css.item}>
      <FaDog className={css.icon} style={{ color: getIconColor(isOnline) }} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  isOnline: PropTypes.bool.isRequired,
};
