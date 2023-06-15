import ToTranslate from "../Controllers/ToTranslateController.js";
import express from "express";

const router = express.Router()

router.route("/").post(ToTranslate.translateText)

export default router