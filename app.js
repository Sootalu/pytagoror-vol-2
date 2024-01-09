const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// Serve static files
app.use(express.static('public'));

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.render('index.html');
});

// Handle POST requests to calculate the result
app.post('/calculate', (req, res) => {
  const sideA = parseFloat(req.body.sideA);
  const sideB = parseFloat(req.body.sideB);
  const result = calculatePythagoreanTheorem(sideA, sideB);

  res.render('index.html', { result });
});

// Function to calculate the Pythagorean theorem
function calculatePythagoreanTheorem(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});