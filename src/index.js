import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import expressJWT from 'express-jwt';
import {
  ApolloServer,
} from 'apollo-server-express';

import handleErrors from 'Middlewares/handleErrors';
import identifyCurrentUser from 'Middlewares/identifyCurrentUser';
import routes from './routes';
import schema from './schema';
import resolvers from './resolvers';

import {
  PORT,
  JWT_SECRET,
} from './config';

const apollo = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    return {
      me: req.currentUser,
    };
  },
});

const app = express();

const unauthenticatedPaths = [
  '/authentication/google',
];

const corsOptions = {
  origin: 'http://localhost:8080',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-quest-auth-token'],
};

app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(expressJWT({ secret: JWT_SECRET }).unless({ path: unauthenticatedPaths }));
app.use(identifyCurrentUser.unless({ path: unauthenticatedPaths }));
app.use('/', routes);

app.use(handleErrors);

apollo.applyMiddleware({
  app,
  path: '/graphql',
});

app.listen(PORT);
