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
  render() {
    return (
      <form>
        <input name="name" placeholder="name"></input>
        <input name="date" placeholder="date"></input>
        <input name="time" placeholder="time"></input>
        <input name="numberOfGuests" placeholder="number of guests"></input>
        <button>Make Reservation</button>
      </form>
    );
  }
}

export default ResyForm;
