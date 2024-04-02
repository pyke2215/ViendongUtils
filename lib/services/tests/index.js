const { v4: uuidv4 } = require('uuid');
const Tests = require('../../models/Tests/index');
const Subjects = require('../../models/Subject/index');
function matchSubjects(type) {
  return Subjects.find({name: type});
}
function mapQuestions(questions){
  const questionsData = [];
  questions.map((q, index) =>{
    questionsData.push({
      "no": index + 1,
      "questionText": q.questionText,
      "optionA": {key: "A", text: q.optionA},
      "optionB": {key: "B", text: q.optionB},
      "optionC": {key: "C", text: q.optionC},
      "optionD": {key: "D", text: q.optionD},
      "correctAnswer": q.correctAnswer
    });
  })
  return questionsData;
}
async function createTests(props) {
    const {subjectId, title, type, timeToDo, total, questions} = props;
    const questionsData = await mapQuestions(questions);
    try{
      const doc = await Tests({
        id: uuidv4(),
        subjectId: subjectId,
        title: title,
        type: type,
        timeToDo: timeToDo,
        total: total,
        exam: questionsData
      });
      doc.save();
      console.log({doc: doc});
      return ({status: "success", data: doc});
    } catch (error) {
      console.log(error);
      return {"status": "failed", error: error};
    }finally{
    }
  }

  async function getAllTests() {
    try {
      // Example: Query documents using Mongoose model
      const testsDoc =  await Tests.find();
      console.log({"status": "success", data: testsDoc});
      return ({"status": "success", data: testsDoc});
    } catch (error) {
      console.log(error);
      return {"status": "failed", error: error};
    }finally{

    }
  }

  async function getTestsById(props) {
    const {objId} = props;
    try {
      // Example: Query documents using Mongoose model
      const testsDoc =  await Tests.find({id: objId});
      console.log({"status": "success", data: testsDoc});
      return ({"status": "success", data: testsDoc});
    } catch (error) {
      console.log(error);
      return {"status": "failed", error: error};
    }finally{

    }
  }
  // getAllSubject();

  module.exports = {
    createTests,
    getTestsById,
    getAllTests
  };