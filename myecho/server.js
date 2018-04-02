var server = require('http').createServer(function(req, res) {

  // get request header
  //var host = req.headers.host;

  res.write(JSON.stringify(req.headers, null, ' '));
  res.end('\n');
}); 
var port = process.env.PORT || 9001;
server.listen(port);
server.on('listening', function(){
  console.log('Listening to ', port);
});
