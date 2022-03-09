import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import Scores from './Scores';
import './styles/TeamDetails.scss';

const TeamDetails = () => {
  const { id } = useParams();
  const teamsList = useSelector((state) => state.teamsReducer);
  const currentTeam = teamsList.filter((team) => team.team.id.toString() === id);
  return (
    <>
      <header className="header">
        <Link to="/">
          <AiOutlineLeft className="return" data-testid="back" />
        </Link>
        <div className="icons-container">
          <BiMicrophone className="header-icon" />
          <FiSettings className="header-icon" />
        </div>
      </header>
      {currentTeam.map((item) => (
        <div className="details-section" key={item.team.name}>
          <div className="details-hero">
            <img src={item.team.logo} alt="team-logo" />
            <div className="details-team-container">
              <h2>{item.team.name}</h2>
              <p>
                Rank -
                {'  '}
                <span>{item.rank}</span>
              </p>
              <p>
                Points -
                {'  '}
                <span>{item.points}</span>
              </p>
              <p>
                Group -
                {' '}
                <span>{item.group}</span>
              </p>
              <p>
                <span>{item.description}</span>
              </p>
            </div>
          </div>
          <ul className="details-main">
            <h2 className="details-team-desc">Team Form</h2>
            <li>
              <p>Goal Difference</p>
              <span>{item.goalsDiff}</span>
            </li>
            <li>
              <p>Form</p>
              <span>{item.form}</span>
            </li>
            <Scores
              title="All"
              lose={item.all.lose}
              played={item.all.played}
              win={item.all.win}
              draw={item.all.draw}
              goals={item.all.goals}
            />
            <Scores
              title="Home"
              lose={item.home.lose}
              played={item.home.played}
              win={item.home.win}
              draw={item.home.draw}
              goals={item.home.goals}
            />
            <Scores
              title="Away"
              lose={item.away.lose}
              played={item.away.played}
              win={item.away.win}
              draw={item.away.draw}
              goals={item.away.goals}
            />
          </ul>
        </div>
      ))}
      ;
    </>
  );
};

export default TeamDetails;
