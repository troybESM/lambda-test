var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "bgg.czddtknpya7o.us-east-1.rds.amazonaws.com",
    user: "bggallison",
    password: "PennyStea1s",
    database: "boardgamecollection",
});
// console.log(connection);
exports.handler = (event, context, callback) => {
    connection.query('show tables', function (error, results, fields) {
        if (error) {
            connection.destroy();
            throw error;
        } else {
            // connected!
            console.log(results);
            callback(error, results);
            connection.end(function (err) { callback(err, results);});
        }
    });
};