const ResearchWorkSchema = new mongoose.Schema({
    r_id: { type: Number, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User  ', required: true }, // Reference to Users
    title: { type: String, required: true },
    description: { type: String },
    startdate: { type: Date, required: true },
    enddate: { type: Date, required: true },
    type: { type: String, enum: ['Ongoing', 'Completed', 'Upcoming'] }
});

const ResearchWork = mongoose.model('ResearchWork', ResearchWorkSchema);