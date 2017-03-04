'use strict'

let PDFR = require('pdfreader');

/*
new PDFR.PdfReader().parseFileItems("testFiles/CBSinglePage.pdf", function(err, item){
  if (err)
    console.log(err);
  else if (!item)
    console.log("not item");
  else if (item.text)
    console.log(item.text);
});
*/

var _ = require('lodash');
var PdfReader = require('pdfreader').PdfReader;
var Rule = require('pdfreader').Rule;
var fs = require('fs');

function displayValue(value){
console.log('Value: ',value)
}

function displayTable(table){
    console.log('Object.keys(table)',Object.keys(table));
    _.map(table.rows, function(row){
        console.log('row',row[0].R);
    });
}

var sampleRules = [
    Rule.on(/^Hello \"(.*)\"$/).extractRegexpValues().then(displayValue),
    Rule.on(/^Value\:/).parseNextItemValue().then(displayValue),
    Rule.on(/^c1$/).parseTable(3).then(displayTable),
    Rule.on(/^Values\:/).accumulateAfterHeading().then(displayValue),
  ];
var processItemSample = Rule.makeItemProcessor(sampleRules);

//var samplePathToPdf = "testFiles/CBSinglePage.pdf";
var samplePathToPdf = "node_modules/pdfreader/test/sample.pdf";

new PdfReader().parseFileItems(samplePathToPdf, function(err, item){
    if (err){
        console.log(err);
    }
    else {
        processItemSample(item);
    }
});
