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
      host: env('DATABASE_HOST', 'bftoonzu9tfxfcpyfxbc-mysql.services.clever-cloud.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'bftoonzu9tfxfcpyfxbc'),
      user: env('DATABASE_USERNAME', 'uqqu6lw0lc3pgjfq'),
      password: env('DATABASE_PASSWORD', 'JHhvLdrin53EdythqaxL'),
      ssl: env.bool('DATABASE_SSL', false)
    },
	pool: { min: 1, max: 4 }
  },
});