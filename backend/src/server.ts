import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'Larissa',
    'Araújo'
  ])
});

app.listen(8000);