import { Routes, Route } from 'react-router-dom';
import TeamDetails from './components/TeamDetails';
import Homepage from './components/Homepage';

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/teamdetails/:id" element={<TeamDetails />} />
  </Routes>
);

export default App;
