const { v4: uuidv4 } = require('uuid');
const Subjects = require('../../models/Subject/index');
async function createSubject(props) {
  const {name} = props;
  console.log(name);
    try {
      const newSubjects = await new Subjects({
        id: uuidv4(),
        name: name
      });
      // Example: Query documents using Mongoose model
      await newSubjects.save();
      console.log(newSubjects); 
      return {"status": "success", data: newSubjects};
    } catch (error) {
      console.error(error);
      return {"status": "failed", error: error};
    }
  }

  async function getAllSubject() {
    try {
      // Example: Query documents using Mongoose model
      const subjects =  await Subjects.find();
      console.log({"status": "success", data: subjects});
      return {"status": "success", data: subjects};
    } catch (error) {
      return {"status": "failed", error: error};
    }
  }

  async function getSubjectById(objId) {
    try {
      // Example: Query documents using Mongoose model
      const subject =  await Subjects.find({id: objId});
      console.log({"status": "success", data: subject});
      return {"status": "success", data: subject};
    } catch (error) {
      return {"status": "failed", error: error};
    }
  }

  // getAllSubject();

  module.exports = {
    createSubject,
    getAllSubject,
    getSubjectById
  }