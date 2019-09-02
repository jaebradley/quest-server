import jwt from 'jsonwebtoken';
import {
  AuthenticationError,
} from 'apollo-server-express';

import {
  JWT_SECRET,
} from 'Src/config';

export default async function parseJWT(token) {
  try {
    return await jwt.verify(token, JWT_SECRET);
  } catch (e) {
    throw new AuthenticationError('Invalid authentication');
  }
}
