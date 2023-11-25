const express = require("express")

const { redirectRoute } = require("../controllers/redirectController")

const router = express.Router()

router.get("/", redirectRoute)

module.exports = router;