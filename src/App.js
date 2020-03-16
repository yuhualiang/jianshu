import React from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/detail/:id' exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;