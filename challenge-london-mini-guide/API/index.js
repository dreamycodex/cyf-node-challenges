const express = require("express");
const app = express();
app.use(express.json());

const allHarrow = require("../data/Harrow.json");

app.get("/", (req, res) => {
  res.send(allHarrow);
});

app.get("/pharmacies", (req, res) => {
  res.send(allHarrow.pharmacies);
});

app.get("/colleges", (req, res) => {
    res.send(allHarrow.colleges);
})

app.get("/doctors", (req, res) => {
    res.send(allHarrow.doctors);
})

app.get("/hospitals", (req, res) => {
    res.send(allHarrow.hospitals);
})
const listener = app.listen(8080, () => {
  console.log("Your app is listening on port 8080" + listener.address().port);
});
