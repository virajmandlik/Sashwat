const EventFeedbackSchema = new mongoose.Schema({
    Event_ID: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Reference to Events
    Max_parts: { type: Number },
    Regi_parts: { type: Number },
    Feedback_score: { type: Number }
});

const EventFeedback = mongoose.model('EventFeedback', EventFeedbackSchema);