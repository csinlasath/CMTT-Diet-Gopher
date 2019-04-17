const db = require('../models/mysql');

module.exports = function(server) {
    server.get('/api/food/all', (req, res) => {
        res.end();
    });
}