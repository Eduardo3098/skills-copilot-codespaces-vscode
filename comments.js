// Create web server that listens to port 3000
// Create a route that listens to GET request at /comments endpoint
// The route should read the file comments.json and send it back as a response
// Start the server

const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('An error occurred');
      return;
    }

    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});