const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();


// GET all books
router.get('/', (req, res) => {
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

//GET reading levels:
router.get('/levels', (req, res) => {
    const queryText = 'SELECT * FROM "reading_levels" ORDER BY "id"'; 
    
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows); 
    })
    .catch((error) => {
    console.log('Error completing SELECT level query', error)
    res.sendStatus(500)
    })
})

//GET selected books
router.get('/:id', (req, res) => {
    const queryText = 'SELECT * FROM "books" WHERE "id"=$1'; 
    console.log('what is going on', req.params.id);
    
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows[0]); 
    })
    .catch((error) => {
    console.log('Error completely SELECT book query', error)
    res.sendStatus(500)
    })
})


// GET selected genres:
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
router.post('/', rejectUnauthenticated, (req, res) => {
    const newBook = req.body;
    const queryText = `INSERT INTO "books" ("title", "author", "image", "level", "grade", "summary", "library_url")
                      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING "id"`;
    const queryValues = [
      newBook.title,
      newBook.author,
      newBook.image,
      newBook.level,
      newBook.grade,
      newBook.summary,
      newBook.library_url
    ];
    pool.query(queryText, queryValues)
      .then((result) => { res.sendStatus(201); 
    console.log(result);
    })
      .catch((error) => {
        console.log('Error completing POST book query', error);
        res.sendStatus(500);
      });
  });


// Route for updating movie info on database
router.put('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    const updatedBook = req.body;

    pool.query(`UPDATE "books"
    SET "title"=$1, 
    "author"=$2, 
    "image"=$3, 
    "level"=$4, 
    "grade"=$5, 
    "summary"=$6
    "library_url"=$7
    WHERE "id"=$8;`, 
    [
        updatedBook.title, 
        updatedBook.author, 
        updatedBook.image, 
        updatedBook.level, 
        updatedBook.grade, 
        updatedBook.summary,
        updatedBook.library_url, 
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


// DELETE from database
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = 'DELETE FROM "books" WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE book query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;