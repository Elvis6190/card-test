const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/proxy', async (req, res) => {
    const username = req.query.username;
    const response = await fetch(`https://api.roblox.com/users/get-by-username?username=${username}`);
    const data = await response.json();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
