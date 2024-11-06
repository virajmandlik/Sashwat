const ClubBudgetSchema = new mongoose.Schema({
    club_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true }, // Reference to Clubs
    sanctioned_budget: { type: Number, required: true },
    year: { type: Number, required: true },
    // Composite primary key
    _id: { type: String, required: true } // Can combine club_id and year if needed
});

const ClubBudget = mongoose.model('ClubBudget', ClubBudgetSchema);