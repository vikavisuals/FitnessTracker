const router = require("express").Router();
const path = require("path");

// GET index HTML
router.get("/", function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
