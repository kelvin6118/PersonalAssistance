const Task = require("../models/Task");
const Event = require("../models/Event");


async function createRequest(req, res){
    try {
        if(req.body.type == 'task'){
            const task = await Task.create({
                userid: req.body.userid,
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.date
            });
            res.status(201).send(task)
        }else if(req.body.type == 'event'){
            const event = await Event.create({
                userid: req.body.userid,
                title: req.body.title,
                description: req.body.description,
                date: req.body.date,
                time: req.body.time
            });
            res.status(201).send(event)
        }else{
            throw new Error('Wrong type')
        }
    } catch (err) {
        res.status(422).json({message: "unable to create"})
    }
}

module.exports = {createRequest};
