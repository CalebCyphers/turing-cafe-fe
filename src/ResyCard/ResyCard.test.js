import React from 'react'
import { render, screen } from '@testing-library/react'
import ResyCard from "./ResyCard"
import '@testing-library/jest-dom'

let mockReservation = { id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }

describe("ResyCard", () => {
  it("Should display a name, date, time, and number of guests", () => {
    render(<ResyCard reservation={mockReservation}/>)

    let name = screen.getByText('Christie')
    let date = screen.getByText('8/8')
    let time = screen.getByText('7:00')
    let numberOfGuests = screen.getByText('Number of guests: 3')


    expect(name).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(time).toBeInTheDocument()
    expect(numberOfGuests).toBeInTheDocument()
  })
})