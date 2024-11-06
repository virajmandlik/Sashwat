const UserSchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    email_id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact_no: { type: Number },
    username: { type: String, required: true },
    gender: { type: String, enum: ['M', 'F', 'O'] },
    type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User Type', required: true }, // Reference to UserTypes
    Cor_id: { type: Number },
    Acad_Dept_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' } // Reference to Departments
});

const User = mongoose.model('User ', UserSchema);