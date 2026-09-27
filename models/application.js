const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    company: {
      type: String,
      required: true
    },
    jobTitle: {
         type: String,
      required: true
    },
    status: {
         type: String,
      required: true,
      enum: ['Applied', 'Interviewed', 'Offer', 'Rejected']
},
    dateApplied: {
         type: Date,
      required: true
    }
});

module.exports = mongoose.model('Application', applicationSchema);