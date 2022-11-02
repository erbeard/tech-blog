const { User } = require('../models');

const userData =
[
  {
    "username": "Rima",
    "email": "rima@sample.com",
    "password": "password1234"
  },
  {
    "username": "Sid",
    "email": "sid@sample.com",
    "password": "password1234"
  },
  {
    "username": "Dev",
    "email": "dev@sample.com",
    "password": "password1234"
  },
  {
    "username": "Rashad",
    "email": "rashad@sample.com",
    "password": "password1234"
  },
  {
    "username": "Edward",
    "email": "edward@sample.com",
    "password": "password1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;