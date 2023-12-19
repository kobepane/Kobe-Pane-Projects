// Import Fastify, MySQL libraries, as well as db info
const fastify = require("fastify")();
const { request } = require("http");
const mysql = require("mysql2");
const { P } = require("pino");
const dbInfo = require("./dbInfo");


// GET Route #1 to return data about a player, if no player_id specified, all players are returned
fastify.get("/players/:player_id?", (request, reply) => {
  const { player_id = "" } = request.params;
  let data = [];
  sql = "SELECT * FROM players";
  
  if (player_id.length > 0) {
    sql += " WHERE player_id = ?"
    data.push(player_id)
  }

  // Setup default response object
  const response = {
    error: "",
    statusCode: 200,
    rows: [],
  };

  // Execute query and respond
  connection.query(sql, data, (errQuery, rows) => {
    if (errQuery) {
      response.error = errQuery;
      response.statusCode = 400;
    } else if (rows.length > 0) {
      response.rows = rows;
    } else {
      response.statusCode = 204;
    }

    // Webserver response
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
      .send(response);
  });
});


// GET Route #2 to return rushing stats for a player in a given year, both parameters are optional
// if no year is provided then all years of rushing data will be returned, if no player_id is 
// provided then rushing data will be returned for all players
fastify.get("/rushstats/:player_id/:year?", (request, reply) => {
  const { player_id = "", year = "" } = request.params;
  let data = [];
  // set up long default query for rushing data using INNER JOIN's
  sql = "SELECT concat(p.first_name, ' ', p.last_name) AS 'Name', p.position, p.team, yw.year, yw.week_number, r.rush_att, r.rush_yds, r.rush_tds FROM stat_lines s INNER JOIN players p ON s.players_player_id = p.player_id INNER JOIN rushing_stats r ON s.stat_id = r.stat_id INNER JOIN year_week yw ON yw.week_id = s.week_id WHERE player_id = ?";
  data.push(player_id);

  if (year.length > 0) {
    sql += " AND year = ?"
    data.push(year)
    }

  // Setup default response object
  const response = {
    error: "",
    statusCode: 200,
    rows: [],
  };

  // Execute query and respond
  connection.query(sql, data, (errQuery, rows) => {
    if (errQuery) {
      response.error = errQuery;
      response.statusCode = 400;
    } else if (rows.length > 0) {
      response.rows = rows;
    } else {
      response.statusCode = 204;
    }

    // Webserver response
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
      .send(response);
  });
});


// GET Route #3 to return a players fantasy score for a given season and week
fastify.get("/stats/:player_id/:year/:week", (request, reply) => {
  const { player_id, year, week } = request.params;
  let data = [];
  sql = "CALL ppr_fantasy_points(?, ?, ?)";
  data.push(player_id, year, week);

  // Setup default response object
  const response = {
    error: "",
    statusCode: 200,
    rows: [],
  };

  // Execute query and respond
  connection.query(sql, data, (errQuery, rows) => {
    if (errQuery) {
      response.error = errQuery;
      response.statusCode = 400;
    } else if (rows.length > 0) {
      response.rows = rows;
    } else {
      response.statusCode = 204;
    }

    // Webserver response
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
      .send(response);
  });
});

// GET Route #4 to compare average fantasy football points of 2 players in a given season
fastify.get("/compare/:first/:second/:year", (request, reply) => {
  const { first, second, year } = request.params;
  let data = [];
  let sql = "CALL compare_players(?, ?, ?)";
  data.push(first, second, year);

  // Setup default response object
  const response = {
    error: "",
    statusCode: 200,
    rows: [],
  };

  // Execute query and respond
  connection.query(sql, data, (errQuery, rows) => {
    if (errQuery) {
      response.error = errQuery;
      response.statusCode = 400;
    } else if (rows.length > 0) {
      response.rows = rows;
    } else {
      response.statusCode = 204;
    }

    // Webserver response
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response)
      .send(response);
  });
});


// POST Route to add a player into players table
fastify.post("/players/", (request, reply) => {
  const {player_id, last_name, first_name, position, jersey_number, age,team = null} = request.body;
  let data = [];
  // construct query dependent on if team is specified or left to be null
  if (team === null) {
    sql = "INSERT INTO players (player_id, last_name, first_name, position, jersey_number, age) VALUES (?, ?, ?, ?, ?, ?);";
    data.push(player_id, last_name, first_name, position, jersey_number, age);
  } else {
    sql = "INSERT INTO players (player_id, last_name, first_name, position, jersey_number, age, team) VALUES (?, ?, ?, ?, ?, ?, ?);";
    data.push(player_id, last_name, first_name, position, jersey_number, age, team);
  }

  // Setup default response object
  const response = {
    error: "",
    statusCode: 201,
    id: "",
  };

  // Execute query and respond
  connection.query(sql, data, (errQuery, result) => {
    if (errQuery) {
      response.error = errQuery;
      response.statusCode = 400;
    } else {
      response.id = result.insertId;
    }

    // Webserver response
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  });
})


// DELETE Route to delete a player from the players table
fastify.delete("/players/:player_id?", (request, reply) => {
  const { player_id = "" } = request.params;
  data = [];
  let sql = "DELETE FROM players WHERE player_id = ?";
  data.push(player_id);
  
  // Setup default response object
  const response = {
    error: "",
    statusCode: 201,
    id: "",
  };

  if (player_id.length > 0) {
    connection.query(sql, data, (errQuery, result) => {
      if (errQuery) {
        response.error = errQuery;
        response.statusCode = 400;
      } else {
        const { affectedRows = 0 } = result;
        if (affectedRows > 0) {
          response.id = player_id;
        } else {
          response.statusCode = 404;
        }
      }

      // Webserver response
      reply
        .code(response.statusCode)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(response);
    });
  } else {
    // Attempt to delete collection not supported
    // Webserver response
    response.statusCode = 405;
    response.error = "Delete entire collection not allowed";
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  }
})


// PUT Route to update a player in the players table
fastify.put("/players/:player_id", (request, reply) => {
  const { player_id } = request.params;
  const {
    last_name = "",
    first_name = "",
    position = "",
    jersey_number = "",
    age = "",
    team = "",
  } = request.body;
  data = [];
  sql = "UPDATE players SET";
  set_sql = "";

  // add potential atributes needed to be updated into set sql adding a comma where needed, and pushing value into data
  if (last_name.length > 0) {
    if (set_sql.length > 0) {
      set_sql += ",";
    }
    set_sql += " last_name = ?";
    data.push(last_name);
  }
  if (first_name.length > 0) {
    if (set_sql.length > 0) {
      set_sql += ",";
    }
    set_sql += " first_name = ?";
    data.push(first_name);
  }
  if (position.length > 0) {
    if (set_sql.length > 0) {
      set_sql += ",";
    }
    set_sql += " position = ?";
    data.push(position);
  }
  if (jersey_number.length > 0) {
    if (set_sql.length > 0) {
      set_sql += ",";
    }
    set_sql += " jersey_number = ?";
    data.push(jersey_number);
  }
  if (age.length > 0) {
    if (set_sql.length > 0) {
      set_sql += ",";
    }
    set_sql += " age = ?";
    data.push(age);
  }
  if (team.length > 0) {
    if (set_sql.length > 0) {
      set_sql += ",";
    }
    set_sql += " team = ?";
    data.push(team);
  }

  // add set_sql to sql
  sql += set_sql;
  // add where clause to sql and push player_id into data
  sql += "WHERE player_id = ?";
  data.push(player_id);

  // Setup default response object
  const response = {
    error: "",
    statusCode: 201,
    id: "",
  };

  if (set_sql.length === 0 || data.length === 0) {
    // Webserver response
    response.statusCode = 400;
    response.error = "Data missing for update";
    reply
      .code(response.statusCode)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(response);
  } else {
    connection.query(sql, data, (errQuery, result) => {
      if (errQuery) {
        response.error = errQuery;
        response.statusCode = 400;
      } else {
        const { affectedRows = 0 } = result;
        if (affectedRows > 0) {
          response.id = player_id;
        } else {
          response.statusCode = 404;
        }
      }
      // Webserver response
      reply
        .code(response.statusCode)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(response);
    });
  }
})


// Create connection to database
console.log("Creating connection...\n");
let connection = mysql.createConnection({
  host: dbInfo.dbHost,
  port: dbInfo.dbPort,
  user: dbInfo.dbUser,
  password: dbInfo.dbPassword,
  database: dbInfo.dbDatabase,
});

// Connect to database
connection.connect(function (err) {
  console.log("Connecting to database...\n");

  if (err) {
    // Handle any errors
    console.log(err);
    console.log("Exiting application...\n");
  } else {
    console.log("Connected to database...\n");
    // Start server and listen to requests using Fastify
    // Note: Latest version of fastify listen requires object as first parameter
    const host = "127.0.0.1";
    const port = 8080;
    fastify.listen({ host, port }, (err, address) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(`Server listening on ${address}`);
    });
  }
});