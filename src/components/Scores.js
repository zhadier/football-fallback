import { PropTypes } from 'prop-types';

const Scores = (props) => {
  const {
    title, played, win, lose, draw, goals,
  } = props;

  return (
    <ul className="score-container" id={title}>
      <h3>{title}</h3>
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
        <h4 className="score-title">Goals</h4>
        <div className="score-goals">
          <div className="for">
            For:
            {' '}
            {goals.for}
          </div>
          <div className="for">
            Against:
            {' '}
            {goals.against}
          </div>
        </div>
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
