// Write A Function That Searches An Array Of Objects For A Specific Person By Name.
//  If Found, Modify Their Age Property.Print The Updated Array.

const updateAgeByName = (arrOfPersons, name, newAge) => {
  const person = arrOfPersons.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  } else {
    console.log("Person not found!");
  }
  return arrOfPersons;
};
