
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);

  if (bmi < 19) {
      res.send("Your BMI is around: " + bmi +
               "<centre><h1>You are Underweight!");
  } else if (19 <= bmi && bmi < 25) {
      res.send("Your BMI is around: " + bmi +
               "<centre><h1>You are Normalweight!");
  } else if (25 <= bmi && bmi < 30) {
      res.send("Your BMI is around: " + bmi +
               "<centre><h1>You are Overweight!");
  } else {
      res.send("Your BMI is around: " + bmi +
               "<centre><h1>You are Obese!");
  }
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
