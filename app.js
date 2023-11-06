const express = require('express');
const path = require('path')


const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/', 'index.html'));
});
app.post('/register', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
    }
    return res.status(200).json({ message: 'Registrado com sucesso' });
});

module.exports = app;