import {
  create,
} from 'Store/userQuests';

export default {
  Mutation: {
    createQuest: async (parent, args, { me }) => {
      const result = await create({ userId: me.id, name: args.input.name, description: args.input.description });
      const userQuest = result[0];
      return {
        id: userQuest.id,
        name: userQuest.name,
        description: userQuest.description,
      };
    },
  },
};
