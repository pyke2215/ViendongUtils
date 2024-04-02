const mongoose = require('mongoose');


const TestsSchema = mongoose.Schema({

    id: {
        type: String,
        unique: true,
        require: [true, "subject id is required"]
    },

    subjectId: {
        type: String,
        ref: "Subjects",
        require: [true, "subjectId id is required"]
    },

    type: {
        type: String,
        require: [true, "tests type is required"]
    },

    title: {
        type: String,
        require: [true, "test title is required"]
    },
    timeTodo: {
        type: mongoose.Schema.Types.Number,
        require: [true, "time to complete test is required"]
    },
    total: {
        type: mongoose.Schema.Types.Number,
        require: [true, "numbers of questions is required"]
    },
    exam: {
        type: mongoose.Schema.Types.Array,
        require: [true, "questions array is required"],
    }
});
const Tests = mongoose.model("Tests", TestsSchema)
module.exports = Tests;