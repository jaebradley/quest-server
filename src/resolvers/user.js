import {
  getById,
} from 'Store/users';
import {
  getByUserId,
} from 'Store/userQuests';

export default {
  Query: {
    me: async (parent, args, { me }) => {
      const user = await getById(me.id);
      const quests = await getByUserId(user.id);
      return {
        id: user.id,
        emailAddress: user.email_address,
        quests,
      };
    },
  },
};
