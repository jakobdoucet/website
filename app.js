import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'

const app = express();
const PORT = 3000;



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viewsPath = path.join(__dirname, '/views');
const publicDirPath = express.static(path.join(__dirname, '/public'));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(publicDirPath);

app.use(express.static('public'));

app.get('', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});