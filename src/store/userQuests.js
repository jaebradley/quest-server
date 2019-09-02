import knex from './knex';

async function create({ userId, name, description }) {
  return knex('user_quests').insert(
    {
      user_id: userId,
      name,
      description,
    },
    [
      'id',
      'name',
      'description',
    ],
  );
}

async function update({ userId, name, description }) {
  return knex('user_quests').update({
    user_id: userId,
    name,
    description,
  });
}

async function getByUserId(userId) {
  return knex('user_quests').select(['id', 'name', 'description']).where('user_id', userId);
}

async function getById(id) {
  return knex('user_quests').select(['id', 'name', 'description']).where('id', id).first();
}

export {
  create,
  update,
  getByUserId,
  getById,
};
