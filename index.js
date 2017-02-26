/**
 * Created by pratapsa on 2/23/2017.
 */
'use strict';


global.app = {};

var fs = require('fs');
var path = require('path');
var express = require('express');
var utils = require('./utils');


// creating a read stream for reading the wdi data file which is quite large
var readable = fs.createReadStream('./WDI_Data.csv',{encoding:'utf8'});

utils.convertCsvToJson(readable);

//to-do to make it a web app and provide user interface to do so.
// app.get('/',function(err,res) {
//
//     res.send('hellowww');
//
// });

//load config details
var keyFile = require(utils.configUtil.secretfile);
var port = process.env.PORT || config.port || 3400;



//app.listen(config.port,function(){ console.log('connected on ',port)});
