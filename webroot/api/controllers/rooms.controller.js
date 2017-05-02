//TODO: setup mongoDB connection

module.exports.getAllRooms = function(req, res) {
    res.status(200).json({
        rooms: [{
            id: 'room_1',
            name: "room 01"
        }, {
            id: 'room_2',
            name: "room 02"
        }]
    });
}