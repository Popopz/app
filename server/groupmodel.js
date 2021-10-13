import * as mongoose from 'mongoose';
const groupSchema = new mongoose.Schema({
    groupName: String,
    channel: [String],
    assis: [String],
    users: [String]
});
var group = mongoose.model("group", groupSchema);
export default user;