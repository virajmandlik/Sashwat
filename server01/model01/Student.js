const StudentSchema = new mongoose.Schema({
    student_id: { type: Number, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true }, // Reference to Users
    enroll_year: { type: Number, required: true },
    status: { type: String, enum: ['Active', 'Passed out'], default: 'Active', required: true },
    curr_year_study: { type: Number, required: true },
    program_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true } // Reference to Programs
});

const Student = mongoose.model('Student', StudentSchema);