const mongoose = require('mongoose');

const UserTypeSchema = new mongoose.Schema({
    type_id: { type: Number, required: true, unique: true },
    type_name: { type: String, required: true }
});

const UserType = mongoose.model('User Type', UserTypeSchema);