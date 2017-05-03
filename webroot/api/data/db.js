var mongoose = require('mongoose');
// protocol://server:port/databaseName
var dburl = 'mongodb://localhost:27017/werewolves'; //TODO: replace with real url

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ' + dburl);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(error) {
    console.log('Mongoose connected error: ' + error);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGINT).');
        process.exit(0);
    })
});

process.on('SIGTERM', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGTERM).');
        process.exit(0);
    })
});

//Capture process restart
//Can restart the application by typing 'rs' in the terminal
process.once('SIGUSR2', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGUSR2).');
        process.kill(process.pid, 'SIGUSR2');
    })
});