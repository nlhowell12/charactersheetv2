import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
 
import { titleCase } from 'helpers/formatHelpers';
import { calcAttMod, getRacialModifiers } from 'helpers/attributeHelpers';
import { changeAttribute } from 'actions/actions';


const styles = theme => ({
    container: {
        width: '500px',
        margin: theme.spacing.unit
    },
    attribute: {
        height: '75px',
        margin: theme.spacing.unit,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '75px',
      },
      modify: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: theme.spacing.unit
      }
})

class AttributesPanel extends Component {
    render() {
        const { character, classes, newChar, dispatch } = this.props;
        return (
            <Card className={classes.container}>
                {Object.keys(character.attributes).map(attribute => {
                    return (
                        <Card key={attribute} className={classes.attribute}>
                        <div className={classes.modify}>
                            {newChar ? <Fab size="small" color="primary" aria-label="Add" className={classes.margin} onClick={evt => dispatch(changeAttribute(attribute, character.attributes[attribute] + 1))}>
                                            <AddIcon />
                                       </Fab>
                            : null}
                            <TextField
                                id="outlined-number"
                                label={titleCase(attribute)}
                                value={character.attributes[attribute]}
                                className={classes.textField}
                                onChange={evt => dispatch(changeAttribute(attribute, evt.target.value))}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        style: {
                                            textAlign: 'center',
                                        }
                                    }
                                }}
                                margin="normal"
                                variant="outlined"
                                error={character.attributes[attribute] < 0}
                                disabled={!newChar}
                                />
                            {newChar ? <Fab size="small" color="primary" aria-label="Add" className={classes.margin} onClick={evt => dispatch(changeAttribute(attribute, character.attributes[attribute] - 1))}>
                                            <RemoveIcon />
                                       </Fab> 
                            : null}
                        </div>
                        <TextField
                                id="outlined-number"
                                label={'Modifier'}
                                value={calcAttMod(character.attributes[attribute])}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        style: {
                                            textAlign: 'center',
                                        }
                                    }
                                }}
                                margin="normal"
                                variant="outlined"
                                disabled
                                />
                        <TextField
                                id="outlined-number"
                                label={'Racial'}
                                value={character.race ? getRacialModifiers(character.race, character.subrace, attribute) : 0}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: {
                                        style: {
                                            textAlign: 'center',
                                        }
                                    }
                                }}
                                margin="normal"
                                variant="outlined"
                                disabled
                                />
                        </Card>
                    )
                })}
            </Card>
        )
    }
}

AttributesPanel.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect()(withStyles(styles)(AttributesPanel))