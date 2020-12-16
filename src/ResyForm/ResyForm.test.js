import React from 'react'
import { render, screen } from '@testing-library/react'
import ResyForm from "./ResyForm"
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe("ResyForm", () => {
  it("Should display four inputs and a button", () => {
    render(<ResyForm />)

    let nameInput = screen.getByPlaceholderText(/name/i)
    let dateInput = screen.getByPlaceholderText(/date/i)
    let timeInput = screen.getByPlaceholderText(/time/i)
    let numberOfGuestsInput = screen.getByPlaceholderText(/number of guests/i)
    let reservationButton = screen.getByRole('button', { name: /make reservation/i })

    expect(nameInput).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(numberOfGuestsInput).toBeInTheDocument()
    expect(reservationButton).toBeInTheDocument()
  })

  it("Should call a function when the forms are filled out and the button is clicked", () => {
    const newReservation = jest.fn()
    render(<ResyForm newReservation={newReservation}/>)

    let nameInput = screen.getByPlaceholderText(/name/i)
    let dateInput = screen.getByPlaceholderText(/date/i)
    let timeInput = screen.getByPlaceholderText(/time/i)
    let numberOfGuestsInput = screen.getByPlaceholderText(/number of guests/i)
    let reservationButton = screen.getByRole('button', { name: /make reservation/i })

    userEvent.type(nameInput, "Caleb")
    userEvent.type(dateInput, "7/7")
    userEvent.type(timeInput, "7:00")
    userEvent.type(numberOfGuestsInput, "7")
    userEvent.click(reservationButton)

    expect(newReservation).toHaveBeenCalled()
  })

  it("Should not call a function if all inputs are not filled in", () => {
    const newReservation = jest.fn()
    render(<ResyForm newReservation={newReservation}/>)

    let nameInput = screen.getByPlaceholderText(/name/i)
    let dateInput = screen.getByPlaceholderText(/date/i)
    let numberOfGuestsInput = screen.getByPlaceholderText(/number of guests/i)
    let reservationButton = screen.getByRole('button', { name: /make reservation/i })

    userEvent.type(nameInput, "Caleb")
    userEvent.type(dateInput, "7/7")
    userEvent.type(numberOfGuestsInput, "7")
    userEvent.click(reservationButton)

    expect(newReservation).not.toHaveBeenCalled()
  })
})