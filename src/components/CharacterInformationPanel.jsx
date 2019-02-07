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
import Card from '@material-ui/core/Card';

import deities from 'assets/deities';

import { changeCharacterDetail } from 'actions/actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
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

  render() {
    const { classes, character, dispatch } = this.props;
    const { deity, alignment, name, age, height, weight } = this.props.character;
    return (
      <Card>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={evt => dispatch(changeCharacterDetail('name', evt.target.value))}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-age"
          label="Age"
          className={classes.textField}
          value={age}
          onChange={evt => dispatch(changeCharacterDetail('age', evt.target.value))}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-height"
          label="Height"
          className={classes.textField}
          value={height}
          onChange={evt => dispatch(changeCharacterDetail('height', evt.target.value))}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-weight"
          label="Weight"
          className={classes.textField}
          value={weight}
          onChange={evt => dispatch(changeCharacterDetail('weight', evt.target.value))}
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
            value={deity}
            onChange={evt => dispatch(changeCharacterDetail('deity', evt.target.value))}
            input={
              <OutlinedInput
                labelWidth={35}
                name="deity"
                id="outlined-deity-simple"
                error={Object.keys(character.classes).includes('cleric') && deity.name === 'None'}
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
            value={alignment}
            onChange={evt => dispatch(changeCharacterDetail('alignment', evt.target.value))}
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
      </Card>
    );
  }
}

CharacterInformationPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(CharacterInformationPanel));
