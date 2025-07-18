const express = require('express');
const crudeRouter = express.Router();


const crudeController = require('../controllers/crude.controller');
crudeRouter.get("/all" ,crudeController.add);
crudeRouter.post("/add",crudeController.create);
crudeRouter.put("/update/:id",crudeController.update);
crudeRouter.delete("/delete/:id",crudeController.remove);
crudeRouter.get("/:id",crudeController.getById);

module.exports = crudeRouter;
console.log("Crude routes created successfully");