module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'https://db4free.net'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'mylearning'),
      user: env('DATABASE_USERNAME', 'jaykrs'),
      password: env('DATABASE_PASSWORD', 'Welcome@0'),
      ssl: env.bool('DATABASE_SSL', false)
    },
	pool: { min: 1, max: 4 }
  },
});
