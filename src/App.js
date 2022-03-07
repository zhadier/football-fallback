import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
