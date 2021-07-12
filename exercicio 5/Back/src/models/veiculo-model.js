'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    veiculo: {
        type: String, require: true,   
    },
    marca: {
        type: String, require: true, 
    },
    ano: {
        type: Number, require: true,
    },
    descricao: {
        type: String, require: true, 
    },
    vendido: {
        type: Boolean, require: true,  
    },
    created: {
        type: Date, default: Date.now    
    },
    updated: {
        type: Date, default: Date.now     
    }
});

module.exports = mongoose.model('veiculo', schema);