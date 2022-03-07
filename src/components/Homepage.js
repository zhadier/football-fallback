import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import TeamItem from './TeamItem';

const Homepage = () => {
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState('');

  const teamsList = useSelector((state) => state.leagueReducer);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
    if (evt.target.value.trim().length === 0) {
      setFilter(null);
    }
    const filtered = teamsList.filter((teams) => teams.team.name.includes(evt.target.value));
    setFilter(filtered);
  };

  const handleEnterPress = (evt) => {
    if (evt.key === 'Enter') {
      evt.target.blur();
    }
  };

  return (
    <>
      <header>
        <input type="text" onKeyPress={handleEnterPress} onChange={handleSearch} value={search} placeholder="Search.." />
        <div className="header-icons">
          <BiMicrophone />
          <FiSettings />
        </div>
      </header>
      <ul className="teams-section">
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
