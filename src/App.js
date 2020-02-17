import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';
import store from './store/index';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
