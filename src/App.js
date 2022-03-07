import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import TeamDetails from './components/TeamDetails';
import Homepage from './components/Homepage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teamdetails/:id" element={<TeamDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
