/**
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'mylearning'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Welcome@0'),
      ssl: env.bool('DATABASE_SSL', false)
    },
	pool: { min: 1, max: 4 }
  },
});
**/
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql-1fde4b6d-jaykrs-18b2.a.aivencloud.com'),
      port: env.int('DATABASE_PORT', 24976),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'avnadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_C-WOgEqV9s5iuIpodWj'),
      ssl: env.bool('DATABASE_SSL', true)
    },
	pool: { min: 1, max: 4 }
  },
});