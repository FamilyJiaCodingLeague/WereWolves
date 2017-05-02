//TODO: setup mongoDB connection
var users = {};

module.exports.loginAsUser = function(req, res) {
    if (req.body && req.body.uid && req.body.nickname) {
        if (!users[req.body.uid]) {
            users[req.body.uid] = {
                id : req.body.uid,
                nickname : req.body.nickname
            };
            res.status(201).json({
                message: "Logged in as: " + req.body.nickname
            });
        } else {
            res.status(400).json({
                message: "A user with nickname '" + req.body.nickname + "' already exists!"
            });
        }
    } else {
        res.status(400).json({
            message: "loginAsUser: required data missing from body"
        });
    }
};