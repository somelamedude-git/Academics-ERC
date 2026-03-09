const mongoose = require('mongoose');

const finalGradeSchema = new mongoose.Schema({
  courseId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },

  branch:{
    type: String,
    enum: ['BMS', 'BEE', 'IMT', 'IMG'] // better than referring over here, we don't need that much overhead
  },

  grades:{
    type: Map,
    of: new mongoose.Schema({
      rollNumber: Number,
      percentage:{
        type: Number,
        min: 0,
        max: 100
      },
      grade: {
        type: String,
        trim: true
      }
    })
  }
}, {timestamps: true});

module.exports = mongoose.model('FinalGrade', finalGradeSchema);
