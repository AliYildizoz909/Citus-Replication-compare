const Pool = require("pg").Pool;

const slave1Pool = new Pool({
  user: "postgres",
  password: "my_password",
  host: "localhost",
  port: 53370,
  database: "postgres",
});

const masterPool = new Pool({
  user: "postgres",
  password: "my_password",
  host: "localhost",
  port: 60062,
  database: "postgres",
});

const pgPool = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

const citusPool = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5501,
  database: "postgres",
});



module.exports = {
  pgReplication: {
    slave1Pool,
    masterPool
  },
  citusPool,
  pgPool
};