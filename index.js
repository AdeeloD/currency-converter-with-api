import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const apiKey = ''; 

app.set('view engine', 'ejs');


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));


app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));

app.get('/', (req, res) => {
  res.render('index', { apiKey: apiKey });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
