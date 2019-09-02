function up(knex) {
  return knex.schema.createTable('user_quests', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.timestamps(true, true);

    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.index('user_id');
    table.index('name');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists('user_quests');
}

module.exports = {
  up,
  down,
};
