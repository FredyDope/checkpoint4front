import React from 'react'
import {
Typography,
withStyles,
} from '@material-ui/core';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  }
})

function Footer(props) {
  const { classes } = props;
      return (
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      )
    
}
export default withStyles(styles)(Footer);