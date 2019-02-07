import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import NavDrawer from 'components/NavDrawer';
import MenuWrapper from 'components/MenuWrapper';
import { login } from 'actions/actions';

const styles = theme => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class Login extends Component {

  state = {
    username:'',
    password:''
  }

  componentWillMount = () => {
    const { user, history } = this.props;
    if (user.username) {
      history.push('/home')
    }
  }

  handleLogin = async () => {
    const { dispatch, history } = this.props;
    const { username, password } = this.state;
    // const httpOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     username, 
    //     password
    //   })
    // };
    // let response  = await fetch('${API ENDPOINT HERE}/login', httpOptions)
    dispatch(login(username, password))
    history.push('/home')
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

render() {
  const { history, classes } = this.props
    return (
      <React.Fragment>
        <NavDrawer/>
        <MenuWrapper>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('username')}
            margin="normal"
            variant="outlined"
          />
          <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('password')}
          margin="normal"
          variant="outlined"
          type='password'
          autoComplete="current-password"
          />
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={evt => this.handleLogin()}
            >
            Login
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={evt => history.push('/signup')}
            >
            Signup
          </Button>
        </MenuWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Login)));