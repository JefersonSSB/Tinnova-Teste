"use strict";

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Product = mongoose.model("veiculo");
const repository = require("../repositories/veiculo")

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
}

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
}

exports.find = async (req, res, next) => {
  try {
    const key = req.query.key;
    const value = req.query.value;
    if(key==='lastweek'){
      var data = await repository.findLastWeek();
    }
    else{
      var data = await repository.find(key, value);
    }
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
}


exports.post = async (req, res, next) => {

  try {
    await repository.create(req.body);
    res.status(201).send({
      message: 'Veiculo cadastrado com sucesso!'
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};


exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
      message: 'Veiculo atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.updatePatch(req.params.id, req.body);
    res.status(200).send({
      message: 'Veiculo atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id)
    res.status(200).send({
      message: 'Veiculo removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};