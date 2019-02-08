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
import { races, subraces } from 'assets/races';

import { changeCharacterDetail } from 'actions/actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '200px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: '60px'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  select: {
    width: 210,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: '16px'  },
  wrapper: {
    margin: theme.spacing.unit,
    display: 'flex'
  }
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
    const { deity, alignment, name, age, height, weight, race, subrace } = this.props.character;
    return (
      <Card className={classes.wrapper}>
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
            htmlFor="outlined-race-simple"
          >
            Race
          </InputLabel>
          <Select
            value={race}
            onChange={evt => dispatch(changeCharacterDetail('race', evt.target.value))}
            input={
              <OutlinedInput
                labelWidth={35}
                name="race"
                id="outlined-race-simple"
              />
            }
          >
            {races.map(race => {
                return <MenuItem key={race.name} value={race}>{race.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        {subraces[race.name] ? <FormControl variant="outlined" className={classes.select}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-subrace-simple"
          >
            Subrace
          </InputLabel>
          <Select
            value={subrace}
            onChange={evt => dispatch(changeCharacterDetail('subrace', evt.target.value))}
            input={
              <OutlinedInput
                labelWidth={70}
                name="subrace"
                id="outlined-subrace-simple"
              />
            }
          >
            {subraces[race.name].map(subrace => {
                return <MenuItem key={subrace.name} value={subrace}>{subrace.name}</MenuItem>
            })}
          </Select>
        </FormControl> :  null}
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
