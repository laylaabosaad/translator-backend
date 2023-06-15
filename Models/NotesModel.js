import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model("notes", NotesSchema)
export default Notes