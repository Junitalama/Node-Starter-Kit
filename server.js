

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
const express = require("express");
const app = express();

// app.get("/", function (req, res) {
    
//   res.send("Yay Node!");
// });

app.get("/hi", function (req, res) {
  res.send("Hello World!");
});

// app.get("/chocolate", function (req, res) {
//   res.send("Mm chocolate :O");
// });

app.get("/chocolate", function (req, res) {
  let amountChoc = req.query.amount;
  res.send(`Hello World! You searched for ${amountChoc}  chocolates`);
});

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.get("/multiply", function (req, res){
    let value1 = req.query.value1;
    let value2 = req.query.value2;
    res.send(value1 * value2);

});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});