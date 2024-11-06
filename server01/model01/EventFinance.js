const EventFinanceSchema = new mongoose.Schema({
    Event_ID: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Reference to Events
    Revenue: { type: Number },
    Sponsorships: { type: Number },
    Budget_alloc: { type: Number, required: true },
    Expenses: { type: Number, required: true }
});

const EventFinance = mongoose.model('EventFinance', EventFinanceSchema);