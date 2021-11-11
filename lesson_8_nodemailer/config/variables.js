module.exports = {
  PORT: process.env.PORT || 5000,
  DB_CONNECT_URL: process.env.DB_CONNECT_URL || 'mongodb://localhost:27017/node-js-2',

  ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY || 'Secret',
  REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY || 'S_2',

  AUTHORIZATION: 'Authorization',

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'test@gmail.com',
  NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || '12345'
};
