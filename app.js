//     const Pool = require("pg").Pool;
// const pool = new Pool({
//  user: "codeforgeek",
//  host: "localhost",
//  database: "users",
//  password: "abc",
//  port: 5432,
// });
// // read information from table
// pool.query("SELECT * FROM profile ORDER BY id ASC", (error,
// results) => {
// if (error) {
//  console.log(error);
//  return;
//  }
// console.log(results);
// });
// // add a new user profile.
// const name = "Shahid";
// const email = "shahid@codeforgeek.com";
// pool.query(
// "INSERT INTO profile (name, email) VALUES ($1, $2)",
//  [name, email],
//  (error, results) => {
//  if (error) {
//  console.log(error);
//  return;
//  }
//  console.log(results);
//  }
// );
const { Pool } = require("pg");

const pool = new Pool({
  user: "codeforgeek",
  host: "localhost",
  database: "users",
  password: "abc",
  port: 5432,
});

// SELECT query to retrieve data from the "profile" table
const selectQuery = "SELECT * FROM profile";

pool.query(selectQuery, (error, results) => {
  if (error) {
    console.log("Error occurred during SELECT query:", error);
    return;
  }
  
  console.log("Data from the 'profile' table:");
  console.log(results.rows);
  
  // Close the connection pool
  pool.end();
});
