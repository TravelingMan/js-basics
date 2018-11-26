let person = {
  name: "Captain Tiddlywinks",
  age: 29,
  location: "The Open Sea"
}

let logPerson = function (personObject) {
  return {
    summary: `${personObject.name}, ${personObject.age} years old.`,
    locationSummary: `${personObject.name} lives in ${personObject.location}.`
  }

}

console.log(logPerson(person).summary)

// Update the object and log the result while accessing a new property
person.name = `Little Red Riding Hood`
person.location = `A Brightly Lit Forest`

console.log(logPerson(person).locationSummary)
