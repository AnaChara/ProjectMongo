const Project = require('../models/projectModel');

module.exports = { 
    getAllProjects: async () => {
        return await Project.find();
    },

    createProject: async (name, description, startDate, endDate, status, budget) => {
        const newProject = new Project({ name, description, startDate, endDate, statu: status, budget });
        return await newProject.save(); // Guarda el nuevo proyecto en la base de datos
    },    

    updateProject: async (_id, status) => {
        return await Project.findByIdAndUpdate(_id, { status });
    },

    deleteProject: async (_id) => {
        return await Project.findByIdAndDelete(_id);
    }
}