const CourseEnrollmentSchema = new mongoose.Schema({
    enr_id: { type: Number, required: true, unique: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Reference to Courses
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }, // Reference to Student
    attendance: { type: Number }
});

const CourseEnrollment = mongoose.model('CourseEnrollment', CourseEnrollmentSchema);