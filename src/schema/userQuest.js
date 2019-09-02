import {
  gql,
} from 'apollo-server-express';

export default gql`
  type UserQuest {
    id: ID!
    name: String!
    description: String
  }

  input CreateQuestInput {
    name: String!
    description: String
  }

  extend type Mutation {
    createQuest(input: CreateQuestInput!): UserQuest!
  }
`;
