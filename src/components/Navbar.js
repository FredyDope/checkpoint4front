import React, { Component } from 'react'
import { Link } from '@reach/router'
import Button from '@material-ui/core/Button';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/formulaire">
          <Button variant="contained" color="primary">New Film?</Button>
        </Link>       
      </div>
    )
  }
}

export default Navbar;