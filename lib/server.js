const DataController = require('./controllers/DataController');
const Reader = require('./utils/Reader');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.json({message: "Welcome to VisualPartners API!"});
});

app.get("/all", (req, res) => {
  const allStudents = Reader.readJsonFile('visualpartners.json');
  res.json(allStudents);
});

app.get("/certified", (req, res) => {
  const certifiedStudents = DataController.certifiedStudents();
  res.json(certifiedStudents);
});

app.get("/above500", (req,res) => {
  const above500Credits = DataController.above500Credits();
  res.json(above500Credits);
})

app.listen(port, () => {
  console.log(`VisualPartners API in localhost:${port}`);
});