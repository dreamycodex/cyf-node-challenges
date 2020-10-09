const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");
const stratford = require("../data/Stratford.json");

const cities = { harrow, heathrow, stratford };

app.get("/", (req, res) => {
  res.send(cities);
});

app.get("/:city", (req, res) => {
    const urlCity = req.params.city;
    const city = cities[urlCity];
    res.send(city);
});

app.get("/:city/pharmacies", (req, res) => {
  const urlCity = req.params.city;
  const pharmacies = cities[urlCity].pharmacies;
  res.send(pharmacies);
});

app.get("/:city/colleges", (req, res) => {
  const urlCity = req.params.city;
  const colleges = cities[urlCity].colleges;
  res.send(colleges);
});

app.get("/:city/doctors", (req, res) => {
  const urlCity = req.params.city;
  const doctors = cities[urlCity].doctors;
  res.send(doctors);
});

app.get("/:city/hospitals", (req, res) => {
  const urlCity = req.params.city;
  const hospitals = cities[urlCity].hospitals;
  res.send(hospitals);
});

const listener = app.listen(8080, () => {
  console.log("Your app is listening on port 8080" + listener.address().port);
});
