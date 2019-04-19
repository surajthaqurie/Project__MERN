
module.exports = {
  dbConfig: {
    dbrl: 'mongodb://localhost:27017/eZ-Shop',
    db: 'eZ-Shop',
    port: "4000",
    DEFAULT_USER_ROLE: 'user',
    SUPER_USER_ROLE: 'superuser'
  },
  jwtConfig: {
    JWT_TOKEN_KEY: "jwtPrivateKey!@#"
  },
  superUser: {
    SUPER_USER_FIRSTNAME: 'mtEverest',
    SUPER_USER_LASTNAME: 'user',
    SUPER_USER_EMAIL: 'superUser@admin.com',
    SUPER_USER_PASSWORD: 'superUser@123',
    SUPER_USER_PHONE: '1234567890',
    SUPER_USER_ROLE: 'superuser'
  },
  collectionConfig: {
    usereColl: 'users',

  }
}



