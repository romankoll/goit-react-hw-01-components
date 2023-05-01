import PropTypes from 'prop-types';
import css from 'components/profile/Profile.module.css';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
