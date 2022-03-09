import { PropTypes } from 'prop-types';

const Scores = (props) => {
  const {
    title, played, win, lose, draw, goals,
  } = props;

  return (
    <ul className="score-container" id={title}>
      <h3>
        {title}
        {' '}
        Stats
      </h3>
      <li>
        <h4 className="score-title">Played</h4>
        <p className="score-value">{played}</p>
      </li>
      <li>
        <h4 className="score-title">Win</h4>
        <p className="score-value">{win}</p>
      </li>
      <li>
        <h4 className="score-title">Loss</h4>
        <p className="score-value">{lose}</p>
      </li>
      <li>
        <h4 className="score-title">Draw</h4>
        <p className="score-value">{draw}</p>
      </li>
      <li>
        <h4 className="score-title">Goals For</h4>
        <p className="score-value">{goals.for}</p>
      </li>
      <li>
        <h4 className="score-title">Goals Against</h4>
        <p className="score-value">{goals.against}</p>
      </li>
    </ul>
  );
};

Scores.propTypes = {
  title: PropTypes.string.isRequired,
  played: PropTypes.number.isRequired,
  win: PropTypes.number.isRequired,
  draw: PropTypes.number.isRequired,
  lose: PropTypes.number.isRequired,
  goals: PropTypes.shape({
    for: PropTypes.number.isRequired,
    against: PropTypes.number.isRequired,
  }).isRequired,
};

export default Scores;
