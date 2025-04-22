/**
 * For this test, we will be using the gorest.co.in API to test every REST method. DO NOT POST ANY
 * ACTUAL DATA TO THIS API WHEN CREATING A SPOOFED USER ACCOUNT
 *
 * You can use https://www.postman.com to test what the API should be returning.
 */
const axios = require('axios');

const API_KEY = '923134c939992ae9d88c0674f7ccfb25bf9010d65fc12294b5d95ce6341a7b36';

const API_URL = 'https://gorest.co.in/public/v2/users';

async function createUser(user) {  
    try {
      const response = await axios.post(API_URL, user, {
        headers: {
          Authorization: `Bearer ${process.env.GOREST_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
}

async function getUsers() {
  try {
    // Use Axios to call GET to the /users API, return the data if success
  } catch (error) {
    // Return an error
  }
}

async function getUser(user) {
  try {
    // Use Axios to call GET to the /users API, return the data if success
  } catch (error) {
    // Return an error
  }
}

async function editUser(user) {
  try {
    // Use Axios to call PUT to the /users API, return the posted data if success
  } catch (error) {
    // Return an error
  }
}

async function deleteUser(user) {
  try {
    // Use Axios to call DELETE to the /users API, return success
  } catch (error) {
    // Return an error
  }
}

module.exports = { createUser, editUser, deleteUser, getUser, getUsers};
