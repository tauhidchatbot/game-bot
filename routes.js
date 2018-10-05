var express = require('express');
module.exports = function(app) {
	console.log("i am in router file");
	//var apiRoutes =  express.Router();

	//var serverBotController = require('./appControllers/botController');
	var gameController = require('./appControllers/controller/gameController');

 /*app.route('/')
    .post(gameController.processRequest);*/
    app.post('/', gameController.processRequest);

  /*  var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });
// registerUser Route
  app.route('/')
    .post(gameDataController.processRequest);*/




	//app.post('/chatBot', require('./controllers/chatController.js').chatBot);
	//app.post('/chatBot', serverBotController.chatBot);
	/*app.post('/chatBot', serverBotController.pizzabot);
	app.post('/registration', serverBotController.userRegistration);*/

	//app.get('/',chatBot.index);
}