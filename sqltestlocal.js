var mysql = require('mysql');
var config = require('./config.json');

var pool  = mysql.createPool({
    host     : config.dbhost,
    user     : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
});
pool.getConnection(function(err, connection) {       
    // Use the connection
    connection.query('SELECT * from games where bggid=1', function (error, results, fields) {
    // And done with the connection.
    connection.release();
    // Handle error after the release.
    if (error) console.log(error);
    else {
        console.log(results);
    }
    });
});