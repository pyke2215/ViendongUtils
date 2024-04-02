const { AppError } = require("../../utils/appError")
const {getAllSubject, createSubject, getSubjectById} = require('../../services/subjects/index');
const { json } = require("express");
const postSubjectController = async (req, res) =>{
    const {name} = req.body;
    try{
        await createSubject({name: name}).then((result) =>{
           if(result.status === "success"){
            res.json({
                status: "success",
                data: json(result)
            })
           }else{
            res.json({
                status: "failed",
                data: json(result)
            })
           }
        });
    }catch(error){
        res.json(AppError("Create subject failed",error.status));
    };
};

const getAllSubjectsController = async (req, res) =>{
    try{
        await getAllSubject().then((result) => {
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
        }).catch((err) => {
            console.log(`fetch data failed, error ${err}`);
        });
    }catch(error){
        res.json(AppError("Fetch subjects failed",error.status));
    };
};

const getSubjectController = async (req, res) =>{
    const {objId} = req.body;
    try{
        await getSubjectById(objId).then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(`fetch data failed, error ${err}`);
        });
    }catch(error){
        res.json(AppError("Fetch subject failed",error.status));
    };
};



module.exports = {
    postSubjectController,
    getAllSubjectsController,
    getSubjectController
}