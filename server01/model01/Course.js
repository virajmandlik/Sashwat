const CourseSchema = new mongoose.Schema({
    course_id: { type: Number, required: true, unique: true },
    course_name: { type: String, required: true },
    prog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true }, // Reference to Programs
    instructor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true }, // Reference to Faculty
    semester: { type: String }
});

const Course = mongoose.model('Course', CourseSchema);