const axios = require("axios");
const dotenv = require("dotenv").config();

const tokenEndpoint = "https://dev-23x7d7jkh7l42d6a.us.auth0.com/api/v2/";

const oAuth = (req, res, next) => {
  const code = req.query.code;

  if (!code) {
    res.status(401).send("Missing auth code");
  }

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", process.env.AUTH0_CLIENT_ID);
  params.append("client_id", process.env.AUTH0_CLIENT_SECRET);
  params.append("code", code);
  params.append("rediredt_uri", "http://localhost:3000/challenges");

  axios
    .post(tokenEndpoint, params)
    .then((response) => {
      req.oauth = response.data;
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json(`Error message: ${err.message}`);
    });
};

module.export = oAuth;
