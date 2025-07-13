import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));

app.get('/', (req, res) => {
  res.redirect('/home');  
});

app.get('/home', (req, res) => {
  res.render('home');   
});

app.get('/about', (req, res) => { 
  res.render('about');   
});

app.get('/blogs', (req,res) => {
  res.render('blogs');
});

app.get('/contact', (req,res) => {
  res.render('contact');
});

app.get('/lyrics', (req,res) => {
  res.render('lyrics');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});