const ResultSchema = new mongoose.Schema({
    enr_id: { type: Number, required: true, unique: true },
    grade: { type: String, required: true },
    status: { type: String, enum: ['Pass', 'Fail'] },
    // Reference to Course Enrollments
});

const Result = mongoose.model('Result', ResultSchema);