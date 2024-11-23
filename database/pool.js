const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: "postgresql://InventoryDB_owner:CSr4jo2zIuYk@ep-lucky-lab-a2o5luyd-pooler.eu-central-1.aws.neon.tech/moviesdb?sslmode=require"
});