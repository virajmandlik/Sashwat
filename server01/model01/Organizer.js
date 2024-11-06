const OrganizerSchema = new mongoose.Schema({
    organizer_id: { type: Number, required: true, unique: true },
    organizer_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cont_no: { type: String }
});

const Organizer = mongoose.model('Organizer', OrganizerSchema);