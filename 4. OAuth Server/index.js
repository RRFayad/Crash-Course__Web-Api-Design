const express = require("express");
const axios = require("axios");
const port = process.env.PORT || 3001;
const oAuth = require("./middleware/oAuth");

const app = express();

const challengesAPIEndpoint = "http://localhost:8080/challenges";

app.use(oAuth);

app.get("/challenges", async (req, res, next) => {
  try {
    const { access_token } = req.oauth;

    const response = await axios({
      method: "get",
      url: challengesAPIEndpoint,
      headers: { Authorization: `Bearer ${access_token}` },
    });
    res.json(response.data);
  } catch (err) {
    console.log(err);
    if ((err.response.status = 401)) {
      res.status(401).json("Unauthorized to access data");
    } else if ((console.err.response.status = 403)) {
      res.status(403).json("Permission Denied");
    } else {
      res.status(500).json("Something went wrong");
    }
  }
});

app.listen((port, () => console.log("Server started")));
