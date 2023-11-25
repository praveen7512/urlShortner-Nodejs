const express = require("express")
const { handleGenerationNewShortURL } = require("../controllers/urlController")

const router = express.Router()

router.post("/", handleGenerationNewShortURL)

module.exports = router;


