import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls.js'
import ResyCard from '../ResyCard/ResyCard'
import ResyForm from '../ResyForm/ResyForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getReservations()
    .then(response => this.setState({ reservations: response }))
  }

  buildCards = () => {
    return(
      this.state.reservations.map(reservation => <ResyCard reservation={reservation}/> )
    )
  }

  newReservation = (newReservation) => {
    let updatedReservations = this.state.reservations.push(newReservation)
    this.setState({ reservations: updatedReservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResyForm newReservation={this.newReservation} className='resy-form' />
        <div className='resy-container'>
          {this.buildCards()}
        </div>
      </div>
    )
  }
}

export default App;
