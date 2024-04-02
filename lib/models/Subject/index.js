const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        require: [true, "subject id is required"]
    },
    name: {
       type: String,
       require: [true, "subject name is required"]
    }  
});
const Subjects = mongoose.model("Subjects", SubjectSchema);
module.exports = Subjects;