const Task = require("../models/Task");


async function getTasks(req, res){
    try {
        const tasks = await Task.findByUserId(req.params.id);
        res.status(200).send(tasks)
    } catch (err) {
        res.status(500).json({message: "Couldn't find tasks"})
    }
}

module.exports = {getTasks};
