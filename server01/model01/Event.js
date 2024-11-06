const EventSchema = new mongoose.Schema({
    Event_ID: { type: Number, required: true, unique: true },
    Event_Name: { type: String, required: true },
    Event_Description: { type: String },
    Event_Category: { type: String },
    Event_Type: { type: String }
});

const Event = mongoose.model('Event', EventSchema);