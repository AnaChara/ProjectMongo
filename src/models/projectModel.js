const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {type: String, require: true},
  description:  {type: String, require: true},
  startDate:  {type: String, require: true},
  endDate: {type: String, require: true},
  status: {type: Boolean, default: false},
  budget: {type: Number, require: true}
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;