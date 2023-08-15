const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator';

app.use(express.json());

const calculatorRouter = express.Router();

calculatorRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

calculatorRouter.post('/add', (req, res) => {
    const num1 = Number(req.body.first);
    const num2 = Number(req.body.second);

    const result = num1 + num2;
    res.send({ 'result': result});
});

calculatorRouter.post('/subtract', (req, res) => {
    const num1 = Number(req.body.first);
    const num2 = Number(req.body.second);

    const result = num1 - num2;
    res.send({ 'result': result});
});

app.use(baseUrl, calculatorRouter);

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
