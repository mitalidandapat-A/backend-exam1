const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
  "title": {
    type: String,
    maxlength: 50,
    minlength: 3,
    required: [true, "Title is required"]
  },
  "description": {
    type: String,
    maxlength: 100,
    minlength: 3
    
  },
  "status": {
    type: String,
    enum: this.toString['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
   "createdAt": {
    type: Date,
    default:new Date(),
    timestamps: true 
   },
    "updatedAt": {
        type: Date,
        default: new Date(),
        timestamps: true
    }
},{versionKey:false});

module.exports = mongoose.model('CrudModel', crudSchema,'crudes'); 
console.log("Crud model created successfully");
