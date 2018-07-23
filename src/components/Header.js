import React from 'react'
import { Link } from "@reach/router"
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';



class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Header</h1>
          <nav>
          <Link to="/home">
          <Button variant="contained" color="primary">Home</Button></Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header