import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyAjaxComponent extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
      {tofetch : Math.floor((Math.random() * 20) + 1)
      ,listToDisplay : []  
      };
  }

  componentDidMount() {
  fetch("https://csunix.mohawkcollege.ca/~000778050/10133/random.php",
       {
        method: 'POST'
       ,headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
       ,body: "requestnum=" + this.state.tofetch
       })
      .then(response => response.json())
      .then(data => {
             console.log(data);
             this.setState({listToDisplay: data });
           });
  }

  render()
  {
    return ( 
      <div>
        <h1>AJAX Data</h1>
        <h2>Positions requested: {this.state.tofetch} </h2>
        <h2>AJAX response data: </h2>
        <ul>
          {this.state.listToDisplay.map( 
              ({num,lat,lng}) => <li key={num}>{lat},{lng}</li> )}
        </ul>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <MyAjaxComponent />
      </div>
    );
  }
}

export default App;
