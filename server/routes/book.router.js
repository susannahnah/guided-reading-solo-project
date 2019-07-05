const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 'SELECT * FROM "books" ORDER BY "id"'; 
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows); 
    })
    .catch((error) => {
    console.log('Error completely SELECT book query', error)
    res.sendStatus(500)
    })
})


/**
 * POST route template
 */
router.post('/api/books', (req, res) => {

});

module.exports = router;