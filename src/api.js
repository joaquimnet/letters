import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Used to check if the letter exists, before committing to reading it.
export const touchLetter = async (slug) => {
  try {
    const res = await axios(API_URL + '/letter/' + slug, { responseType: 'json' });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Reads the letter, this operation erases the message and is not reversible.
export const readLetter = async (slug) => {
  try {
    const res = await axios.delete(API_URL + '/letter/' + slug, { responseType: 'json' });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Creates a new letter and returns the slug for it.
export const createLetter = async (letter) => {
  try {
    const res = await axios.post(API_URL + '/letter', letter, { responseType: 'json' });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
