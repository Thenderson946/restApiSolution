/**
 * For this test, we will be using the gorest.co.in API to test every REST method. DO NOT POST ANY
 * ACTUAL DATA TO THIS API WHEN CREATING A SPOOFED USER ACCOUNT
 *
 * You can use https://www.postman.com to test what the API should be returning.
 */
const axios = require("axios");

const API_KEY = "testkey123";

const API_URL = "https://gorest.co.in/public/v2/users";

async function createUser(user) {
  try {
    const response = await axios.post(API_URL, user, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

async function getUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

async function getUser(user) {
  try {
    const response = await axios.get(`${API_URL}/${user.id}`, user, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

async function editUser(user) {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

async function deleteUser(user) {
  try {
    const response = await axios.delete(`${API_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}

module.exports = { createUser, editUser, deleteUser, getUser, getUsers };
