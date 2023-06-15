import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ToTranslateSchema = new Schema({
  target_language: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const ToTranslate = mongoose.model("translate", ToTranslateSchema)
export default ToTranslate