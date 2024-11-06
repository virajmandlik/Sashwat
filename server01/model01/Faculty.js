const FacultySchema = new mongoose.Schema({
    faculty_id: { type: Number, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true }, // Reference to Users
    hire_year: { type: Number },
    designation: { type: String },
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, // Reference to Departments
    status: { type: String }
});

const Faculty = mongoose.model('Faculty', FacultySchema);