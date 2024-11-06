const CareerInfoSchema = new mongoose.Schema({
    c_id: { type: Number, required: true, unique: true },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }, // Reference to Student
    organization: { type: String, required: true },
    description: { type: String },
    position: { type: String },
    pay: { type: Number },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    type: { type: String, enum: ['Job', 'Internship', 'Research Grant'], required: true }
});

const CareerInfo = mongoose.model('CareerInfo', CareerInfoSchema);