// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.

  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('Something went wrong. Unable to get list of pets!');
    });


};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    // Fill out as part of Wave 2.
    axios.get(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`${error.response.status}: failed request`);
      });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    // Fill out as part of Wave 3.
    axios.delete(BASE_URL + selectedPetId)
      .then((response) => {
        setResult('Successfully removed the pet!');
      })
      .catch((error) => {
        setError('Failed to remove the pet. Pet was not found.')
      });
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  
  // notices that options was a nested object in petInfo
  // used spread syntax to flatten the input
  const petParams = {
    name: petInfo.name,
    ...petInfo.options
  }
  
  axios.post(BASE_URL, petParams)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError('Failed to add a new pet!');
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
