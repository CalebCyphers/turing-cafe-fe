import React, { Component } from "react";
import "./ResyForm.css"

class ResyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      numberOfGuests: 1,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitReservation = (event) => {
    event.preventDefault()
    if (
      this.state.name &&
      this.state.date &&
      this.state.time &&
      this.state.numberOfGuests
    ) {
      let constructedReservation = {
        id: Date.now,
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        number: this.state.numberOfGuests,
      };
      this.props.newReservation(constructedReservation)
      this.setState({ name: "" })
      this.setState({ date: "" })
      this.setState({ time: "" })
      this.setState({ numberOfGuests: 1 })
    }
  }

  render() {
    return (
      <form className="resy-form">
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="name"
        ></input>
        <input
          name="date"
          onChange={this.handleChange}
          value={this.state.date}
          placeholder="date"
        ></input>
        <input
          name="time"
          onChange={this.handleChange}
          value={this.state.time}
          placeholder="time"
        ></input>
        <input
          name="numberOfGuests"
          onChange={this.handleChange}
          value={this.state.numberOfGuests}
          placeholder="number of guests"
        ></input>
        <button onClick={this.submitReservation}>Make Reservation</button>
      </form>
    );
  }
}

export default ResyForm;
