const mongoose = require ('mongoose');

const detailSchema = new mongoose.Schema({
    name: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String, required: true},
    residence: {type: String, required: true},
    address: {type: String, required: true},
    town: {type: String, required: true},
    education: {type: String, required: true},
    job: {type: String, required: true},
    skills: {type: String, required: true},
    salary: {type: Number, required: true},
}, {timestamps: true}
);



module.exports = mongoose.model("Detail", detailSchema);;