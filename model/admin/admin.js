'use strict'


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
  name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: {type: String, default: '管理员'},
  status: Number, // 1：普通管理员，2：超级管理员
  avatar: {type: String, default: 'default.jpg'},
  city: String
});

adminSchema.index({id: 1});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
