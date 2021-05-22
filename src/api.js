import got from 'got';

const API_URL = 'http://localhost:3000';

// Used to check if the letter exists, before committing to reading it.
export const touchLetter = async (id) => {
  try {
    const res = await got(API_URL + '/letter/' + id, { responseType: 'json' });
    return res.body;
  } catch (err) {
    console.log(err);
  }
};

// Reads the letter, this operation erases the message and is not reversible.
export const readLetter = async (id) => {
  try {
    const res = await got.delete(API_URL + '/letter/' + id, { responseType: 'json' });
    return res.body;
  } catch (err) {
    console.log(err);
  }
};

// Creates a new letter and returns the slug for it.
export const createLetter = async (letter) => {
  try {
    const res = await got.post(API_URL + '/letter', { responseType: 'json', body: letter });
    return res.body?.slug;
  } catch (err) {
    console.log(err);
  }
};
