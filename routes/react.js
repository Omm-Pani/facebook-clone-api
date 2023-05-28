const express = require("express");
const { getReacts, reactPost } = require("../controllers/react");
const { authUser } = require("../middlewares/auth");

const router = express.Router();
router.put("/reactPost", authUser, reactPost);
router.get("/getReacts/:id", authUser, getReacts);
module.exports = router;
