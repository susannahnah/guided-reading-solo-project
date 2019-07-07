const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
// GET all books
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

// GET selected books:
router.get('/book_genres', (req, res) => {
    pool.query(`SELECT "genres"."genre", "books"."title" from "genres"
    JOIN "book_genres"
    ON "book_genres"."genre_id"="genres"."id"
    JOIN "books" ON "books"."id"="book_genres"."book_id"
    WHERE "book_genres"."book_id"=$1;`, [req.query.id])
    .then((response) => {
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('Error completing SELECT book genres', error);
        res.sendStatus(500)  
    });
});

// GET selected grade levels: 
router.get('/grade_levels', (req, res) => {
    pool.query(`SELECT "grades"."grade", "books"."title" from "grades"
    JOIN "grade_levels"
    ON "grade_levels"."grade_id"="grades"."id"
    JOIN "books" ON "books"."id"="grade_levels"."book_id"
    WHERE "grade_levels"."book_id"=$1;`, [req.query.id])
    .then((response) => {
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('Error completing SELECT book genres', error);
        res.sendStatus(500)  
    });
});

//POST a new book


// Route for updating movie info on database
router.put('/', (req, res) => {
    console.log(req.body);
    const updatedBook = req.body;

    pool.query(`UPDATE "books"
    SET "title"=$1, 
    "author"=$2, 
    "image"=$3, 
    "level"=$4, 
    "grade"=$5, 
    "summary"=$6
    WHERE "id"=$7;`, 
    [
        updatedBook.title, 
        updatedBook.author, 
        updatedBook.image, 
        updatedBook.level, 
        updatedBook.grade, 
        updatedBook.summary, 
        updatedBook.id
    ])
    .then((response) => {
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log('Error completing UPDATE of movies', error);
        res.sendStatus(500)
    });

});


/**
 * POST route template
 */
router.post('/api/books', (req, res) => {

});

module.exports = router;