import React, { Component } from "react";

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      numberOfGuests: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
        <input name="name" onChange={this.handleChange} value={this.state.name} placeholder="name"></input>
        <input name="date" onChange={this.handleChange} value={this.state.date} placeholder="date"></input>
        <input name="time" onChange={this.handleChange} value={this.state.time} placeholder="time"></input>
        <input name="numberOfGuests" onChange={this.handleChange} value={this.state.numberOfGuests} placeholder="number of guests"></input>
        <button>Make Reservation</button>
      </form>
    );
  }
}

export default ResyForm;
