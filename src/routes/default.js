const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    return res.send("Hello advisa ")
});

module.exports = router;
