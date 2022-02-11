const EnventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EnventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'url' });
    }
}

module.exports = Logger;
