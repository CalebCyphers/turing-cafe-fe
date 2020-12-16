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
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResyForm className='resy-form'>

        </ResyForm>
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
