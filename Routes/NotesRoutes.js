import Notes from "../Controllers/NotesController.js";
import express from "express";

const router = express.Router()

router.route("/").post(Notes.addNotes)
router.route("/").get(Notes.getAll);
router.route("/:id").delete(Notes.deleteNote);
router.route("/:id").put(Notes.editNotes);

export default router