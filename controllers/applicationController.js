const mongoose = require('mongoose');
const ApplicationError = require('../utils/ApplicationError');


const Application = require('../models/Application');

const getApplications = async (req, res, next) => {

   try {

    const page = Number(req.query.page);
    const limit = Number(req.query.limit);


    if (page.isInteger)

    const filter = {};
    
    const allowedSortFields = ["company", "jobTitle", "status", "dateApplied"];

    if (req.query.status) {
        filter.status = req.query.status;
    }

    let sortField = req.query.sort || 'dateApplied'; 
    let sortOrder = 1; 

   
    if (sortField.startsWith('-')) {
        sortOrder = -1;
        sortField = sortField.substring(1); 
    }

    if (!allowedSortFields.includes(sortField)) {
        sortField = 'dateApplied';
        sortOrder = 1;
    }

   let page = req.query.page === undefined ? 1 : Number(req.query.page);

    if (!Number.isInteger(page) || page <1){

        return res.status(400).json({
            "message": "invalid page"
        })
    }   



    
    let limit = req.query.limit === undefined ? 5 : Number(req.query.limit)

    if (!Number.isInteger(limit) || limit > 1 || limit < 100){
         return res.status(400).json({
            "message": "invalid limit"
        })
    }
    const skip = (page-1)*limit

    
    const applications = await Application.find(filter)
        .sort({ [sortField]: sortOrder }).skip(skip); 

    res.json(applications);

} catch (error) {
    next(error);
}
}


const getApplicationById = async (req, res, next) => {
    const id = req.params.id;
    const valid = mongoose.isValidObjectId(id)

    if (valid == false) {

        return res.status(400).json({
            "message": "application incorrect"
        })
    }

    try {

        const application = await Application.findById(id);

        if (!application) {

            return next(new ApplicationError("Application not found", 404));

        }

        else {
            res.json(application);
        }

    } catch (error) {
        next(error)
    }


};

const createApplication = async (req, res, next) => {


    try {

        const application = await Application.create(req.body);

        res.json({
            message: "Application created successfully",
            data: application
        });
    } catch (error) {
        next(error)
    }


};

const updateApplication = async (req, res, next) => {

    const id = req.params.id;

    const valid = mongoose.isValidObjectId(id)

    try {

        if (valid == false) {

            return res.status(400).json({
                "message": "application incorrect"
            })
        }


        const application = await Application.findByIdAndUpdate(
            id,
            req.body,

            {
                returnDocument: 'after',
                runValidators: true,
            }
        );

        res.json(application);

        if (!application1) {
            return next(new ApplicationError("Application not found", 404))
        }

    } catch (error) {

        next(error)
    }


};

const deleteApplication = async (req, res, next) => {
    const id = req.params.id

    if (!mongoose.isValidObjectId(id)) {

        return res.status(400).json({
            message: "application incorrect"
        })

    }

    try {

        const application = await Application.findByIdAndDelete(id);
        res.json(application)

        if (!application1) {
            return new ApplicationError("Application not found", 404)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { getApplications, createApplication, getApplicationById, updateApplication, deleteApplication };
