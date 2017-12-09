module.exports = {
  db: {
    database: 'for_examples',
    username: 'root',
    password: 1234,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    }
  },
  client: {
    endpoints: {}
  },
  apiHost: process.env.API_HOST || 'http://localhost:3001',
  wsHost: process.env.WS_HOST || 'http://localhost:3002' 
}