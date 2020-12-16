import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls.js'
import ResyCard from '../ResyCard/ResyCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.buildCards()}
        </div>
      </div>
    )
  }
  componentDidMount() {
    getReservations()
    .then(response => this.setState({ reservations: response }))
  }

  buildCards() {
    return(
      this.state.reservations.map(reservation => <ResyCard reservation={reservation}/> )
    )
  }
}

export default App;
