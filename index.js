const config = require(`${process.cwd()}/config`);
const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit')
const XLSX = require('xlsx');

// Load the Excel data into an array
const workbook = XLSX.readFile(`${config.dataFileName}.xlsx`);
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
});

app.set('view engine', 'ejs');
app.use(express.static(`${process.cwd()}/public`));
app.use(express.json());
app.use(limiter);
app.set('trust proxy', 1);

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/search', (req, res) => {
  //console.log(req.body)
  const { searchInput } = req.body;
  const result = data.find(
    (item) =>
      item.seating_no.toString() === searchInput ||
      item.arabic_name.includes(searchInput)
  ) || `No Results Found`;
  res.json(result);
  console.log(`someone got their results: ${JSON.stringify(result)}`);
});

app.listen(config.port, () => {
  console.log(`Server started on http://localhost:${config.port}`);
});