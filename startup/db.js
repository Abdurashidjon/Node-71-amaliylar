const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function () {
    mongoose.connect(config.get('db'), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            winston.debug('MongoDb ga ulanish hosil qilindi...');
        });
    mongoose.set('useCreateIndex', true);
}
 