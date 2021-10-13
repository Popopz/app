import * as mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    role: [String]
});
const user = mongoose.model('user', userSchema);
export default user;