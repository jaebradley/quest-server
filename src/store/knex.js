import knex from 'knex';

import {
  NODE_ENV,
} from 'Src/config';

import knexfile from '../../knexfile';

const configuration = knexfile[NODE_ENV];

export default knex(configuration);
