const db = require('../models/mysql');

module.exports = function(server) {
    server.get('/api/all', (req, res) => {
        res.end();
    });
}