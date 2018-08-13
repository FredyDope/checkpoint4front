import React from 'react'
import {
AppBar,
Toolbar,
IconButton,
Typography,
Button,
withStyles,
} from '@material-ui/core';

import { Home as HomeIcon, Add as AddIcon } from '@material-ui/icons';

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
            <IconButton color="inherit"><HomeIcon /></IconButton>
          </Link>  
          <Link to="/formulaire">
            <IconButton color="secondary"><AddIcon /></IconButton>
          </Link>  
          </Toolbar>
        </AppBar>
      )
    }
}
export default withStyles(styles)(Header);