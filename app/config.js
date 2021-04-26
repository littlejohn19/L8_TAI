const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:TestTai0@ds261527.mlab.com:61527/tai',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
