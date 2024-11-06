const EventDetailSchema = new mongoose.Schema({
    Event_ID: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Reference to Events
    Organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer', required: true }, // Reference to Organizers
    Event_Date: { type: Date, required: true },
    Start_Time: { type: String },
    End_Time: { type: String },
    Venue: { type: String, required: true }
});

const EventDetail = mongoose.model('EventDetail', EventDetailSchema);