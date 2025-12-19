const express = require("express");
const router = express.Router();
const { validateJSON, fixJSON } = require("../controllers/jsonController");

router.post("/validate", validateJSON);
router.post("/fix", fixJSON);

module.exports = router;