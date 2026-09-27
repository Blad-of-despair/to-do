const express = require('express');

const router = express.Router();

const {
    getApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication
} = require('../controllers/applicationController');


router.get('/', getApplications);

router.post('/', createApplication);

router.get('/:id', getApplicationById);

router.patch('/:id', updateApplication);

router.delete('/:id', deleteApplication)


module.exports = router;