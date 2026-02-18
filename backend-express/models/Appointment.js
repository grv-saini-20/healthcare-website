const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\d\s\-\+\(\)]+$/, 'Please provide a valid phone number']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  treatmentType: {
    type: String,
    required: [true, 'Treatment type is required'],
    enum: [
      'cancer',
      'breast',
      'gallbladder',
      'hernia',
      'piles',
      'gastro',
      'consultation'
    ]
  },
  preferredDate: {
    type: Date,
    required: [true, 'Preferred date is required']
  },
  message: {
    type: String,
    trim: true,
    maxlength: [500, 'Message cannot exceed 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
appointmentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create indexes for better query performance
appointmentSchema.index({ createdAt: -1 });
appointmentSchema.index({ status: 1 });
appointmentSchema.index({ preferredDate: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
