import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Scores from './Scores';

const TeamDetails = () => {
  const { id } = useParams();
  const teamsList = useSelector((state) => state.teamsReducer);
  const currentTeam = teamsList.filter((team) => team.team.id.toString() === id);
  console.log(currentTeam);
  return (
    <div className="details-section">
      <div className="details-hero">
        <img src={currentTeam[0].team.logo} alt="team-logo" />
        <div className="team-container">
          <h2>{currentTeam[0].team.name}</h2>
          <p>
            Rank :
            {' '}
            {currentTeam[0].rank}
          </p>
          <p>
            Points :
            {' '}
            {currentTeam[0].points}
          </p>
          <p>
            Goal Difference :
            {' '}
            {currentTeam[0].goalsDiff}
          </p>
          <p>
            Form :
            {' '}
            {currentTeam[0].form}
          </p>
          <p>
            Group :
            {' '}
            {currentTeam[0].group}
          </p>
          <p>
            Description :
            {' '}
            {currentTeam[0].description}
          </p>
        </div>
      </div>
      <div className="details-main" />
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
    </div>
  );
};

export default TeamDetails;
