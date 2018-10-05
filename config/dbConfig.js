var mongoose = require('mongoose');
console.log("in config file");

//var dburl    = 'mongodb://127.0.0.1:27017/tauhidbotdb'; //for localhost

//var dburl = 'mongodb://botmodels:tauhid123@ds235461.mlab.com:35461/tauhidbotdb'; //for mlab connection
 var dburl  = 'mongodb://gameModel:tauhid123@ds223653.mlab.com:23653/gamescheduling';
/* console.log(dburl);
 return;*/


mongoose.connect(dburl, { useNewUrlParser: true });
mongoose.connection.on('connected',function() {
	console.log('mongoose default connection open to' + " " + dburl);
	// body...
});
mongoose.connection.on('err',function(err){
	console.log('mongoose default connection err' + err);
});
