const ClubSchema = new mongoose.Schema({
    club_id: { type: Number, required: true, unique: true },
    club_name: { type: String, required: true },
    club_coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }, // Reference to Faculty
    type: { type: String }
});

const Club = mongoose.model('Club', ClubSchema);