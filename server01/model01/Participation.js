const ParticipationSchema = new mongoose.Schema({
    part_id: { type: Number, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User  ', required: true }, // Reference to Users
    date: { type: Date, required: true },
    organization: { type: String, required: true },
    org_type: { type: String }
});

const Participation = mongoose.model('Participation', ParticipationSchema);