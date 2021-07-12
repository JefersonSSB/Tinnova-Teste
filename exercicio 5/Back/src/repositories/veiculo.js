'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('veiculo');

exports.get = async () => {
    const res = await Product.find();
    return res;
}

exports.find = async (key,value) => {
    const res = await Product.find().where(key).equals(value);
    return res;
}

exports.findLastWeek = async () => {
    const res = await Product.find().where('created').lt(Date.now()-7);
    return res;
}

exports.getById = async (id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                veiculo: data.veiculo,
                marca: data.marca,
                ano: data.ano,
                descricao: data.descricao,
                vendido: data.vendido,
                updated: Date.now() 
            }
        });
}

exports.updatePatch = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                data
            }
        });
}

exports.delete = async (id) => {
    await Product
        .findByIdAndRemove(id);
}