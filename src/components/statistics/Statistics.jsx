import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css';

function getRandomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color.slice(-6).padStart(6, '0');
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            className={css.statItem}
            key={item.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
