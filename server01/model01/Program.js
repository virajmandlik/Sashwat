const ProgramSchema = new mongoose.Schema({
    prog_id: { type: Number, required: true, unique: true },
    prog_name: { type: String, required: true },
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true }, // Reference to Departments
    duration: { type: Number, required: true },
    intake: { type: Number, required: true }
});

const Program = mongoose.model('Program', ProgramSchema);