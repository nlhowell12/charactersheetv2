import React, { Component } from 'react';
import { Provider } from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from 'components/Login'
import Signup from 'components/Signup'
import NewChar from 'components/NewChar'
import Navbar from 'components/Navbar';
import Home from 'components/Home'
import reducer from 'reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar></Navbar>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/home" component={Home}/>
              <Route path="/create" component={NewChar}/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
