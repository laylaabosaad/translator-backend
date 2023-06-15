import Notes from "../Models/NotesModel.js";

const addNotes = async (req, res) => {
  const text = req.body.text;
  console.log(text)
  try {
    const add = new Notes({
      text:text
    });
    const savedNotes = await add.save();
    

    res.send({
      message: "Note added successfully",
      data: savedNotes,
    });
  } catch {
    res.send({
      message: "addition failed",
    });
  }
};

const getAll = async (req, res) => {
  const response = await Notes.find();
  res.send({
    message: "all Notes",
    data: response,
  });
};


const deleteNote = async (req, res) => {
  const NoteId = req.params.id;
  try {
    const deletenote = await Notes.findByIdAndDelete(NoteId);
    res.send({
      message: "the note was deleted",
      data: deletenote,
    });
  } catch (error) {
    res.send({
      message: "Note not found",
    });
  }
};

const editNotes = async (req, res) => {
  const id = req.params.id;
  try {
    const updatenotes = await Notes.findByIdAndUpdate(id, req.body);
    res.send({
      message: "Note updated",
      data: updatenotes,
    });
  } catch (error) {
    res.send({
      message: "Update failed",
    });
  }
};







export default {addNotes, getAll, deleteNote, editNotes}