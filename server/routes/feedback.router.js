var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.post('/', (req, res) => {
    let queryText = `INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES
        ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(response => res.sendStatus(200))
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "feedback";`;
    pool.query(queryText)
        .then(response => res.send(response.rows))
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;