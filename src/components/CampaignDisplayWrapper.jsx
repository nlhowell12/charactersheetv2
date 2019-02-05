import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
  },
});

class PaperSheet extends Component {
  render() {
    const { classes, children } = this.props;
  return (
    <div>
      <Paper className={classes.root} elevation={5}>
        {children}
      </Paper>
    </div>
  );
}
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);