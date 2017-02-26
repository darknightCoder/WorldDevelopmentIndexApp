/**
 * Created by pratapsa on 2/23/2017.
 */
'use strict'


// gets the config file

var fs = require('fs');
var path = require('path');

if(process.env.CONFIG_FILE_LOCATION) {
    var config = require('konphyg')(process.env.CONFIG_FILE_LOCATION);
    console.log(global);
}  else {
    var config = require('konphyg')(path.resolve('./','config'));
}
//console.log(__dirname,__filename,exports,module);
module.exports = config('appConfig');