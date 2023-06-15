
import ToTranslate from "../Models/InputTranslate.js";
import request from "request" ;


const translateText = (req, res) => {
  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "ed421c2961msh320ba132df3b5efp1a1c0ejsne22787fbf7f8",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    form: {
      source_language: "auto",
      target_language: req.body.target_language,
      text: req.body.text,
    },
  };

  request(options, function (error, response, body) {
    if (error) {
      return res
        .status(500)
        .json({ message: "Error translating text", error: error.message });
    }

    const translatedText = JSON.parse(body).output_text;
    const translatedInput = new ToTranslate({
      input_text: req.body.text,
      output_text: translatedText,
      target_language: req.body.target_language,
    });

    translatedInput
      .save()
      .then(() => {
        res.status(200).json({
          message: "Translation saved successfully",
          data: { text: translatedText },
        });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Error saving translation", error: err.message });
      });
  });
};

export default{ translateText };
