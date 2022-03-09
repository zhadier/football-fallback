import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const TeamItem = (props) => {
  const {
    id, name, logo, rank,
  } = props;

  return (
    <li className="team-container" id={`team-${id}`}>
      <Link to={`/teamdetails/${id}`} data-testid={`test-${id}`}>
        <BsArrowRightCircle className="right-arrow-icon" />
        <img src={logo} alt="team-logo" />
        <div className="team-desc-container">
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
