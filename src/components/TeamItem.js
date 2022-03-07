import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const TeamItem = (props) => {
  const {
    id, name, logo, rank,
  } = props;

  return (
    <li className="rocket-container" id={`team-${id}`}>
      <Link to={`/teamdetails/${id}`}>
        <img src={logo} alt="team-logo" />
        <div className="team-container">
          <h2>{name}</h2>
          <p>
            Rank :
            {' '}
            {rank}
          </p>
        </div>
      </Link>
    </li>
  );
};

TeamItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default TeamItem;
