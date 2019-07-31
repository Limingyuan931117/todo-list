import React from 'react';
import './App.css';
import Start from './point';
import Container from './cart/Container';
import List from './list';
import Reduxlist from './list-redux/components/ListContainer';
import createContainer from './list-redux/createContainer';
import { Provider } from 'react-redux';
import store from './list-redux/main';
import HashBox from './router-hash/HashBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <createContainer.Provider>
        <Provider store={store}>
          <HashBox />
        </Provider>
      </createContainer.Provider>
    </div>
  );
};

export default App;
