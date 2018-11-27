let restaurant = {
  name: "Hairy Mike's Bar and Sauna",
  guestCapacity: 50,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function(partySize) {
    this.guestCount += partySize
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize
  }
}

// Does it do the thing?

restaurant.seatParty(48)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))