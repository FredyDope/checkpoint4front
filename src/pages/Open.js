import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from "@reach/router"



class Open extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Bienvenu sur CineBlog</h1>
        <h2>il est {this.state.date.toLocaleTimeString()}.</h2>
        	<Link to="/home">
			    <button className="buttonform" 
					cstyle={{padding: 'auto'}}
					variant="raised"
					color="primary" 
					>
					entrez
					</button>
          	</Link>  
      </div>
    );
  }
}

ReactDOM.render(
  <Open />,
  document.getElementById('root')
);
export default Open
