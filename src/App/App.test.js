import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe("ResyForm", () => {
  it("Should display the form", () => {
    render(<App />)

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

  it("Should be able to make a new card", () => {
    render(<App />)

  })
})
