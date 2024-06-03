const express = require('express');
const app = express();
const port = 8080;


app.use(express.urlencoded({ extended: true }));


app.get('/sum', (req, res) => {
    const { a, b } = req.query;

    if (!isNaN(a) &&!isNaN(b)) {
        const sum = Number(a) + Number(b);
        res.status(200).send(`Sum: ${sum}`);
    } else {
        res.status(400).send('Invalid operands');
    }
});

app.get('/dif', (req, res) => {
    const { a, b } = req.query;

    if (!isNaN(a) &&!isNaN(b)) {
        const sum = Number(a) - Number(b);
        res.status(200).send(`Dif: ${sum}`);
    } else {
        res.status(400).send('Invalid operands');
    }
});

app.get('/power', (req, res) => {
    const { a, b } = req.query;

    if (!isNaN(a) &&!isNaN(b)) {
        const sum = Number(a) * Number(b);
        res.status(200).send(`Power: ${sum}`);
    } else {
        res.status(400).send('Invalid operands');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});