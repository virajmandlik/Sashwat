const InfrastructureSchema = new mongoose.Schema({
    infra_id: { type: Number, required: true, unique: true },
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true }, // Reference to Departments
    description: { type: String },
    budget: { type: Number, required: true },
    actual_expenses: { type: Number, required: true },
    startdate: { type: Date, required: true },
    enddate: { type: Date, required: true }
});

const Infrastructure = mongoose.model('Infrastructure', InfrastructureSchema);