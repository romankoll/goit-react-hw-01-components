// import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  //   const { avatar, name, isOnline } = friends;
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.name}>
          <span className="status">{friend.isOnline}</span>
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
