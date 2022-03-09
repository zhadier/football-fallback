import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { getLeagueFromAPI } from '../redux/Leagues/leagues';
import { getTeamsFromAPI } from '../redux/Teams/teams';
import TeamItem from './TeamItem';
import './styles/Homepage.scss';

const Homepage = () => {
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState('');

  const teamsList = useSelector((state) => state.teamsReducer);
  const league = useSelector((state) => state.leagueReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (teamsList.length === 0) {
      dispatch(getTeamsFromAPI());
    }
    if (league.length === 0) {
      dispatch(getLeagueFromAPI());
    }
  }, []);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
    if (evt.target.value.trim().length === 0) {
      setFilter(null);
    } else {
      const val = evt.target.value.trim().toLowerCase();
      const filtered = teamsList.filter((teams) => teams.team.name.toLowerCase().includes(val));
      setFilter(filtered);
    }
  };

  const handleEnterPress = (evt) => {
    if (evt.key === 'Enter') {
      evt.target.blur();
    }
  };

  return (
    <>
      <header className="header">
        <input
          className="search"
          type="text"
          onKeyPress={handleEnterPress}
          onChange={handleSearch}
          value={search}
          placeholder="🔍 Search"
        />
        <div className="icons-container">
          <BiMicrophone className="header-icon" />
          <FiSettings className="header-icon" />
        </div>
      </header>
      {league.map((item) => (
        <div className="league-info" key={item.name}>
          <img src={item.logo || ' '} alt="league" />
          <div className="league-description">
            <h2 className="league-name">{item.name || ' '}</h2>
            <p>{item.country || ' '}</p>
            <p>{item.season || ' '}</p>
          </div>
        </div>
      ))}
      <ul className="teams-section">
        <h2 className="teams-header">Team rankings</h2>
        {!filter
          ? teamsList.map((item) => (
            <TeamItem
              name={item.team.name}
              logo={item.team.logo}
              id={item.team.id}
              key={item.team.id}
              rank={item.rank}
            />
          ))
          : filter.map((item) => (
            <TeamItem
              name={item.team.name}
              logo={item.team.logo}
              id={item.team.id}
              key={item.team.id}
              rank={item.rank}
            />
          ))}
      </ul>
    </>
  );
};

export default Homepage;
