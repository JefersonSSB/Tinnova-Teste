'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/veiculo-controller');

router.get('/veiculos',controller.get);
router.get('/veiculos/:id',controller.getById);
router.post('/veiculos',controller.post);
router.put('/veiculos/:id',controller.put);
router.patch('/veiculos/:id',controller.patch);
router.get('/buscarveiculos',controller.find);
router.delete('/veiculos/:id',controller.delete);


module.exports = router;