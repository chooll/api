const express = require('express');
const PORT = 8080;

const cors = require("cors");
const db = require("./db");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get ('/test', async (req, res) => {
    const request = await db.query('SELECT * FROM Coment');
    res.json (request.rows);
})

app.get ('/vacancy', async (req, res) => {
    const request = await db.query('SELECT * FROM VACANCY');
    res.json (request.rows);
})

app.post ('/sendcoment', async (req, res) => {
    const {name, comment} = req.body;
    const request = await db.query(`call  createcommnet ('${name}', '${comment}')`)
})

app.post ('/sendvacancy', async (req, res) => {
    const {fam, name, otch, date, phone, name_vacancy} = req.body;
    const request = await db.query(
        `call add_answer ('${fam}', '${name}', '${otch}', '${date}', ${phone}, '${name_vacancy}')`
    );
    res.json(req.body);
})

app.post ('/sendancet', async (req, res) => {
    const {name, fam, otch, phone, typeOrg, nameOrg} = req.body; 
    const request = await db.query (
        `INSERT INTO ancent_contragent (name, fam, otch, phone, typeOrg, nameOrg) VALUES ( 
            '${fam}', '${name}', '${otch}', ${phone}, '${typeOrg}', '${nameOrg}'
        )`
    )
    res.json(req.body)
})

app.post ('/getallanswer', async (req, res) => {
    const request = await db.query('SELECT * FROM ANSWER_VACANCY');
    res.json(request.rows)
})

app.listen(
    PORT,
    () => console.log(`Server is work on port ${PORT}`)
)