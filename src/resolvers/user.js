import {
  getById,
} from 'Store/users';

export default {
  Query: {
    me: async (parent, args, { me }) => {
      const user = await getById(me.id);
      return {
        id: user.id,
        emailAddress: user.email_address,
      };
    },
  },
};
