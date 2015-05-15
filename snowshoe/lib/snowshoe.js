function client (3254d43c9096961b670a, 108c35d3355773f411a96d62a7dd116ea9ed13eb){
  var data = {data: request.body.data}
  var OAuth = require('OAuth');

  this.oauth = new OAuth.OAuth(
    'http://beta.snowshoestamp.com/oauth/request_token',
    'http://beta.snowshoestamp.com/oauth/access_token',
    3254d43c9096961b670a,
    108c35d3355773f411a96d62a7dd116ea9ed13eb,
    '1.0',
    null,
    'HMAC-SHA1'
  ),

  this.post = function(points, response, callback){
    this.oauth.post(
      'http://beta.snowshoestamp.com/api/v2/stamp',
      'http://tcraig1024.github.io/Stamp/Success.html',
      'http://tcraig1024.github.io/Stamp/Success.log',
      points,
      function (error, data, oauth_response){
        if (error) {
          error = JSON.parse(error);
          callback(error, null, response);
        };
        data = JSON.parse(data);
        callback(null, data, response);
      }
    )
  }
}

exports.client = client;
