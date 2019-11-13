const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// setting view engine
app.set("view engine", "ejs");
// middelware/
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res) {
  res.render("home.ejs");
});
// handling POST root
app.post("/", function(req, res) {
  const options = {
    method: "GET",
    url: "https://apicloud-facerect.p.rapidapi.com/process-url.json",
    qs: {
      features: "true",
      url: "http://apicloud.me/assets/facerect/image1.jpg"
    },
    headers: {
      "x-rapidapi-host": "apicloud-facerect.p.rapidapi.com",
      "x-rapidapi-key": "de27227ca8msh163abb7cbd93f0fp191006jsn93c20921c54d"
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
});
app.listen(3000, function() {
  console.log("server is live on port: 3000");
});
