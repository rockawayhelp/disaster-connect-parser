var types = require("./lib/types.json")
  , resources = require("./lib/resources.json");

function determineType (msg) {  
  for (var typeIndex = 0, length = types.length; typeIndex < length; typeIndex++) {
    var type = types[typeIndex];
    if ( msg.toUpperCase().match(type) ) {
      return type;
    }
  }
  
}

function determineResource (msg) {
  
  for (var resource = 0, length = resources.length; resource < length; resource++) {
    if ( msg.toUpperCase().match(resources[resource]) ) {
      return resources[resource];
    }
  }
  
}

module.exports = {
  determineType: determineType,
  determineResource: determineResource
};