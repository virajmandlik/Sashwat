const DepartmentSchema = new mongoose.Schema({
    dept_id: { type: Number, required: true, unique: true },
    dept_name: { type: String, required: true },
    head: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' }  // Reference to Users
});

const Department = mongoose.model('Department', DepartmentSchema);