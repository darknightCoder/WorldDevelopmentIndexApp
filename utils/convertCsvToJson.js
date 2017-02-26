/**
 * Created by pratapsa on 2/26/2017.
 */

const csv = require('csvtojson');
const fs = require('fs');
const countryCode =require('../data/countryCodes.json');

var json = {};
var data = [];
var top15=[];
var count=0;

var parseTop15 = function(gdpRow){
    //initial sorting
    var index=-1;
    var newIndex=-1;
    if(top15.length<15) {
        if (top15.length === 0) {
            top15.push(gdpRow);
        }
        else {

            for (var i = 0; i < top15.length; i++) {
                if (parseFloat(top15[i]['2005']) < parseFloat(gdpRow['2005'])) {
                    index = i;
                    break;
                }
            }

            if (index !== -1) {
                top15.splice(index, 0, gdpRow);
            }
            else {
                top15[top15.length] = gdpRow;
            }
        }
    }

    else {
        for(var i=0;i<15;i++){
            if(parseFloat(top15[i]['2005'])<parseFloat(gdpRow['2005'])) {
                newIndex=i;
                break;
            }
        }
        if(newIndex!==-1){
            top15.splice(newIndex,0,gdpRow);
        }
        top15.length=15;
    }


console.log('***********************************iteration : ',count++,gdpRow['Country Code']);


}

var findIfItIsBig =function(gdpRow){

    return index;
};

exports = module.exports = {

     convertToJson: function(readableStream) {
         var allCodes=countryCode.map(function (data) {
             return data['alpha-3'];
         });
         console.log(allCodes);
         csv()
             .fromStream(readableStream)
             .on('json',function(csvRow){
                 //console.log(csvRow)
             //console.log(allCodes.indexOf(csvRow['Country Code']),csvRow['Country Code']);
                 if(csvRow['Indicator Name']=='GDP (current US$)' && csvRow['2005']!=='' && allCodes.indexOf(csvRow['Country Code'])!==-1) {

                     //data.push(csvRow);
                     parseTop15(csvRow)
                     //console.log(csvRow['2005'])
                 }

              //json.push(csvRow);
             })
             .on('done',function(err) {
                 fs.writeFile('output1.csv',function(){
                     console.log('done');
                 })

             console.log('************And the top 15 countries are***********') ;
                 top15.forEach(function (row) {
                     console.log(row['Country Name']);
                 });
         });
         
         return data;
         
     }
  
 }