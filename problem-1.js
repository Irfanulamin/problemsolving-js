// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender.
// Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names.

const filterMaleData = (arr) => {
  const malesData = arr.filter((person) => person.gender === "male");
  const namesOfMaleCandidate = malesData.map((person) => person.name);
  return namesOfMaleCandidate;
};
