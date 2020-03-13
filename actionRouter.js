const express = require("express");

const router = express.Router();

const actionDB = require("./data/helpers/actionModel");


// GET da actions
router.get("/", (req, res)=>{
    actionDB
    .get()
    .then(actions=>{
        res.status(200).json(actions)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// GET da action by :id
router.get("/:id", (req, res)=>{
    const {id}=req.params
    actionDB
    .get(id)
    .then(action=>{
        res.status(200).json(action)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// POST da New action
router.post("/", (req, res)=>{
    const newAction=req.body
    actionDB
    .insert(newAction)
    .then(()=>{
        res.status(200).json(req.body)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// PUT an update to da action by :id
router.put("/:id", (req, res)=>{
    const {id}=req.params
    const change=req.body
    actionDB
    .update(id, change)
    .then(change =>{
        res.status(201).json(change)
    })
    .catch(error => {
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// DELETE an action by da :id
router.delete("/:id", (req, res)=>{
    const {id}=req.params
    actionDB
    .remove(id)
    .then(deleteAction=>{
        res.status(201).json(deleteAction)
    })
    .catch(error =>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
module.exports = router;

