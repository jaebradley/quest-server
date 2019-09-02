import dotenv from 'dotenv';

dotenv.config();

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
  PORT,
  NODE_ENV,
} = process.env;

export {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
  PORT,
  NODE_ENV,
};
