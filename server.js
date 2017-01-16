const path = require('path')
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  return res.render('pages/about', { current: 'about' });
});

app.get('/about', (req, res) => {
  return res.render('pages/about', { current: 'about' });
});

app.get('/contacts', (req, res) => {
  return res.render('pages/contacts', { current: 'contacts' });
});

app.get('/prices', (req, res) => {
  return res.render('pages/prices', { current: 'prices' });
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
