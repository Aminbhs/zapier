var raw_json = JSON.parse(inputData.raw_json)
var json = raw_json

var promises = [];
raw_json.line_items.forEach(function(element, index) {
  delete json.line_items;
  Object.assign(json, {line_items: element})
  var options = {
    method: 'POST',
    body: JSON.stringify(raw_json)
  }
  promises.push(fetch(url_webhook, options));
});

Promise.all(promises).then(function(res){
    var blobPromises = [];
    for (var i = res.length - 1; i >= 0; i--) {
        blobPromises.push(res[i].text());
    }
    return Promise.all(blobPromises);
}).then(function(body){
    var output = {id: 1234, rawData: body};
    callback(null, output);
}).catch(callback);
