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
          <AiOutlineLeft className="return" />
        </Link>
        <div className="icons-container">
          <BiMicrophone className="header-icon" />
          <FiSettings className="header-icon" />
        </div>
      </header>
      <div className="details-section">
        <div className="details-hero">
          <img src={currentTeam[0].team.logo} alt="team-logo" />
          <div className="details-team-container">
            <h2>{currentTeam[0].team.name}</h2>
            <p>
              Rank -
              {'  '}
              <span>{currentTeam[0].rank}</span>
            </p>
            <p>
              Points -
              {'  '}
              <span>{currentTeam[0].points}</span>
            </p>
            <p>
              Group -
              {' '}
              <span>{currentTeam[0].group}</span>
            </p>
            <p>
              <span>{currentTeam[0].description}</span>
            </p>
          </div>
        </div>
        <ul className="details-main">
          <h2 className="details-team-desc">Team Form</h2>
          <li>
            <p>Goal Difference</p>
            <span>{currentTeam[0].goalsDiff}</span>
          </li>
          <li>
            <p>Form</p>
            <span>{currentTeam[0].form}</span>
          </li>
          <Scores
            title="All"
            lose={currentTeam[0].all.lose}
            played={currentTeam[0].all.played}
            win={currentTeam[0].all.win}
            draw={currentTeam[0].all.draw}
            goals={currentTeam[0].all.goals}
          />
          <Scores
            title="Home"
            lose={currentTeam[0].home.lose}
            played={currentTeam[0].home.played}
            win={currentTeam[0].home.win}
            draw={currentTeam[0].home.draw}
            goals={currentTeam[0].home.goals}
          />
          <Scores
            title="Away"
            lose={currentTeam[0].away.lose}
            played={currentTeam[0].away.played}
            win={currentTeam[0].away.win}
            draw={currentTeam[0].away.draw}
            goals={currentTeam[0].away.goals}
          />
        </ul>
      </div>
    </>
  );
};

export default TeamDetails;
