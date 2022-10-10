const Event = require("../models/Event");


async function getEvents(req, res){
    try {
        const events = await Event.findByUserId(req.params.id);
        res.status(200).send(events)
        
    } catch (err) {
        res.status(500).json({message: "Couldn't find events"})
    }
}

module.exports = {getEvents};
