var snowshoe = require('./lib/snowshoe');
var client = new Snowshoe.client(SNOWSHOE_APP_KEY, SNOWSHOE_APP_SECRET)
var data = {data: request.body.data}
// in order for the callback to behave correctly inside OAuth 
// you must include the route's response object as the second argument 
client.post(data, response, function(error, data, response)
{ if (error) { 
// handle errors 
window.location.href = "http://tcraig1024.github.io/Stamp/Error.html";
}; 
// handle success 
window.location.href = "http://tcraig1024.github.io/Stamp/Success.html"
})
module.exports = snowshoe;
