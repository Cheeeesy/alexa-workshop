'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Moin Moin, altes Haus! Für welche Tageszeit möchtest du eine Frase?');
    },
    'MoinIntent': function () {
        this.emit(':tell', 'Moin moin, ich hoffe du hast einen wunderbaren Tag!');
    },
    'MahlzeitIntent': function () {
        this.emit(':tell', 'Mahlzeit, lass es dir schmecken. ');
    },
    'AbendIntent': function () {
        this.emit(':tell', 'Guten Abend meine Damen und Herren, willkommen zur Tagesschau.');
    },
    'AMAZON.HelpIntent': function() {
      this.emit(':ask', 'Du kannst mich nach morgens, mittags und abends fragen. Welche Tageszeit interessiert dich?');
    },
    'AMAZON.StopIntent': function() {
      this.emit(':tell', 'Auf Wiedersehen und hoffentlich bis bald.');
    }
};
