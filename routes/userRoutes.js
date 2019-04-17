const db = require('../models/mysql');

module.exports = function(server) {
    server.get('/api/users/all', (req, res) => {
        res.end();
    });
}