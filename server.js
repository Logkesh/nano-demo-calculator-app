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
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input. Please provide valid numbers.');
    }
    const result = num1 + num2;
    res.send(`Addition result: ${result}`);
});

calculatorRouter.post('/subtract', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input. Please provide valid numbers.');
    }

    const result = num1 - num2;
    res.send(`Subtraction result: ${result}`);
});

app.use(baseUrl, calculatorRouter);

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
