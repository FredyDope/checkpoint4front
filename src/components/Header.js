import React from 'react'
import {
AppBar,
Toolbar,
IconButton,
Typography,
withStyles,
} from '@material-ui/core';
import { Home as HomeIcon, Edit as EditIcon } from '@material-ui/icons';

import { Link } from "@reach/router"

const styles = {
 flex: {
   flex: 1,
 },
}

class Header extends React.Component {
    render() {
      return (
        <AppBar position="static">
          <Toolbar>
          <Typography variant="title" color="inherit">
          Cine Blog
          </Typography>
          <Link to="/home">
            <IconButton><HomeIcon /></IconButton>
          </Link>  
          <Link to="/moviesmanager">
          <IconButton color="secondary" ><EditIcon /></IconButton>
          </Link>
          </Toolbar>
        </AppBar>
      )
    }
}
export default withStyles(styles)(Header);