const AuditLogSchema = new mongoose.Schema({
    log_id: { type: Number, required: true, unique: true },
    table_name: { type: String, required: true },
    operation: { type: String, required: true }, // e.g., INSERT, UPDATE, DELETE
    changed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User  ' }, // Reference to Users
    change_date: { type: Date, default: Date.now },
    old_values: { type: String },
    new_values: { type: String }
});

const AuditLog = mongoose.model('AuditLog', AuditLogSchema);