var should = require('should')
  , parser = require('../');

describe('Parser', function () {
  
  it('should exists', function () {
    parser.should.exist
  });
  
  it('should have a method called determineType', function () {
    parser.determineType.should.exist
  });
  
  it('should have a method called determineResource', function () {
    parser.determineResource.should.exist
  });
});

describe('Determine types', function () {
 
  it('should pull out HAVE from "HAVE FOOD"', function () {
    var msg = "HAVE FOOD";
    var type = parser.determineType(msg);
    type.should.equal('HAVE');
  });
  
  it('should pull out NEED from "NEED FOOD"', function () {
    var msg = "NEED FOOD";
    var type = parser.determineType(msg);
    type.should.equal('NEED');
  });
  
});