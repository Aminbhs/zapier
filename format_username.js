var firstname = inputData.firstname
var lastname = inputData.lastname
var geoloc = inputData.geoloc

firstname = firstname.replace(/\s/g, "")
lastname = lastname.replace(/\s/g, "")

firstname = firstname.toLowerCase()
lastname = lastname.toLowerCase()

firstname = firstname.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
lastname = lastname.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

firstname = firstname.replace(/[^\w\s]/gi, '')
lastname = lastname.replace(/[^\w\s]/gi, '')

var maMap = new Map();
maMap.set("true", "1");
maMap.set("false", "0");

var geolocnumber = maMap.get(geoloc);

output = [{geloc1: geolocnumber, username: firstname+ "_" + lastname}];
