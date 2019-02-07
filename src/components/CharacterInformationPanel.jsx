import React from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import deities from 'assets/deities';

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
  select: {
    width: 200,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // height: 56,
    position: 'relative',
    top: '16px'
  },
});

const alignments = [
    'Lawful Good',
    'Neutral Good', 
    'Chaotic Good',
    'Lawful Neutral',
    'Chaotic Neutral',
    'Lawful Evil',
    'Neutral Evil',
    'Chaotic Evil'
]
class CharacterInformationPanel extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
    deity: '',
    alignment: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, character } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-age"
          label="Age"
          className={classes.textField}
          value={this.state.age}
          onChange={this.handleChange('age')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-height"
          label="height"
          className={classes.textField}
          value={this.state.height}
          onChange={this.handleChange('height')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-weight"
          label="weight"
          className={classes.textField}
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.select}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-deity-simple"
          >
            Deity
          </InputLabel>
          <Select
            value={this.state.deity}
            onChange={this.handleChange('deity')}
            input={
              <OutlinedInput
                labelWidth={35}
                name="deity"
                id="outlined-deity-simple"
              />
            }
          >
            {deities.map(deity => {
                return <MenuItem key={deity.name} value={deity}>{deity.name}</MenuItem>
            })}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.select}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-alignment-simple"
          >
            Alignment
          </InputLabel>
          <Select
            value={this.state.alignment}
            onChange={this.handleChange('alignment')}
            input={
              <OutlinedInput
                labelWidth={70}
                name="alignment"
                id="outlined-alignment-simple"
              />
            }
          >
            {alignments.map(alignment => {
                return <MenuItem key={alignment} value={alignment}>{alignment}</MenuItem>
            })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

CharacterInformationPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        character: state.newChar
    }
}
export default connect(mapStateToProps)(withStyles(styles)(CharacterInformationPanel));
