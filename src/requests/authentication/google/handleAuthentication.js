import authenticateUser from 'Src/google/authenticate';
import {
  create,
  get,
} from 'Store/users';
import generateJWT from 'Src/utilities/generateJWT';

async function handleAuthentication(request, response, next) {
  if (!request.body.token) {
    response.statusCode = 400;
    response.json({
      message: 'Invalid request',
    });
    next();
  }

  const {
    token,
  } = request.body;
  try {
    const userDetails = await authenticateUser(token);
    const {
      id: providerId,
      emailAddress,
    } = userDetails;
    // TODO: @jaebradley probably want to wrap this in a transaction
    let user = await get({ provider: 'GOOGLE', providerId });
    if (!user) {
      user = await create({ emailAddress, provider: 'GOOGLE', providerId });
    }
    const jwt = generateJWT({ userId: user.id });
    response.statusCode = 200;
    response.setHeader('x-quest-auth-token', jwt);
    response.json({
      message: 'Authenticated',
    });
  } catch (e) {
    response.statusCode = 500;
    response.json({
      message: 'Server error when authenticating user',
    });
  }
}

export default handleAuthentication;
