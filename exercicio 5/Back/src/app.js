"use strict";

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

// Connecta ao banco
mongoose.connect(config.connectionString,{ useNewUrlParser: true, useUnifiedTopology: true });

// Carrega os Modelos
const Veiculo = require("./models/veiculo-model");

// Carrega as Rotas
const VeiculoRoute = require("./routes/veiculo-route");

// Habilita o Body Parse
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// Habilita o CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});


app.use("/", VeiculoRoute);
module.exports = app;