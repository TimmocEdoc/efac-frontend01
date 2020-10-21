const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('./dist/cafe'));
app.use(cors());

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/cafe' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)