const { AppError } = require("../../utils/appError")
const { json } = require("express");
const { createTests, getAllTests, getTestsById } = require("../../services/tests");
const postTestscontroller = async (req, res) =>{
    const {subjectId, title, type, timeToDo, total, questions} = req.body;
    try{
        await createTests(
            {subjectId: subjectId,
             title: title,
            type: type,
            timeToDo: timeToDo,
            total: total,
            questions: questions}
            ).then((result) =>{
            if(result.status === "success"){
                res.json({
                    result
                })
               }else{
                res.json({
                    status: "failed",
                    data: json(result)
                })
               }
        });
    }catch(error){
        res.json(new AppError("Create tests failed",error.status));
    };
};

const getAllTestsController = async (req, res) =>{
    try{
        await getAllTests().then((result) => {
            if(result.status === "success"){
                res.json(result);
               }else{
                res.json({
                    status: "failed",
                    data: json(result)
                })
               }
        }).catch((err) => {
            console.log(`fetch data failed, error ${err}`);
        });
    }catch(error){
        res.json(AppError("Fetch tests data failed",error.status))
    };
};

const getTestsController = async (req, res) =>{
    const {objId} = req.body;
    try{
        await getTestsById({objId: objId}).then((result) => {
            if(result.status === "success"){
                res.json(result)
               }else{
                res.json({
                    status: "failed",
                    data: json(result)
                })
               }
        }).catch((err) => {
            console.log(`fetch data failed, error ${err}`);
        });
    }catch(error){
        res.json(AppError("Fetch tests data failed",error.status))
    };
};



module.exports = {
   postTestscontroller,
   getAllTestsController,
   getTestsController,
}