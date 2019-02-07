import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import NavDrawer from 'components/NavDrawer';
import MenuWrapper from 'components/MenuWrapper';
import { signup } from 'actions/actions';

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
    password: null,
    password2: null,
    email: ''
  }

  componentWillMount = () => {
    const { user, history } = this.props;
    if (user.username) {
      history.push('/home')
    }
  }

  handleSignup = () => {
    const { dispatch, history } = this.props;
    const { username, password } = this.state;
    // Need to implement authentication, currently super dumb
    dispatch(signup(username, password))
    history.push('/home')
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

render() {
  const { classes, history } = this.props;
  const { password, password2, email, name } = this.state;
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
          />
          <TextField
          id="outlined-password-input"
          label="Re-Enter Password"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('password2')}
          margin="normal"
          variant="outlined"
          type='password'
          error={password !== password2 && password && password2}
          />
           <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
          type='email'
          autoComplete="email"
          />
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={evt => this.handleSignup()}
            disabled={!password || password !== password2 || !email || !name }
            >
            Create New Profile
          </Button>
          <Link onClick={evt => history.replace('/')} style={{cursor: 'pointer', alignSelf: 'center'}}>Already a member?</Link>
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